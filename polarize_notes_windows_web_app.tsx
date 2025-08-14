/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint no-console: ["warn", { allow: ["group", "groupEnd", "assert", "warn"] }] */
import React, { useEffect, useMemo, useRef, useState } from 'react';
// Minimal, production-ready Bear-style notes app (Windows-friendly, runs in browser)
// Single-file React component for Canvas preview. Local-first, no backend required.
// Tech: React + Tailwind (built-in here), marked + highlight.js. No build config needed in Canvas.

// --- External libs (available in Canvas runtime) ---
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // pleasant default; Canvas will inline
import {
  Archive as ArchiveIcon,
  ArrowLeft,
  Bold,
  CheckSquare,
  Code, // icon used in toolbar
  Download,
  Eye,
  EyeOff,
  FileText,
  Hash,
  Heading as HeadingIcon,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListChecks,
  Moon,
  Pin,
  Plus,
  Printer,
  RefreshCcw,
  Search,
  Settings,
  Star,
  Sun,
  Tags,
  Trash,
  Upload,
  X,
} from 'lucide-react';

// --- Types ---
type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
  archived?: boolean;
  trashed?: boolean;
};

type SettingsState = {
  theme: 'light' | 'dark' | 'system';
  density: 'cozy' | 'compact';
  editorFontSize: number; // px
};

type ViewMode = 'inbox' | 'archive' | 'trash';

// --- Utilities ---
const STORAGE_KEY = 'bearlike_notes_v1';
const SETTINGS_KEY = 'bearlike_settings_v1';
const LAST_OPEN_KEY = 'bearlike_last_open_id_v1';

function uid() {
  // Crisp, URL-safe ids
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function now() {
  return Date.now();
}

function saveNotes(notes: Note[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as Note[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveSettings(s: SettingsState) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

function loadSettings(): SettingsState {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) throw 0;
    const s = JSON.parse(raw) as SettingsState;
    return {
      theme: s.theme ?? 'system',
      density: s.density ?? 'cozy',
      editorFontSize: s.editorFontSize ?? 16,
    };
  } catch {
    return { theme: 'system', density: 'cozy', editorFontSize: 16 };
  }
}

function extractTags(text: string): string[] {
  // Supports nested tags: #work/project/x
  // Avoid matching hex colors or headings by requiring a letter/digit after '#'
  const tags = new Set<string>();
  const regex =
    /(^|\s)#([\p{L}\p{N}][\p{L}\p{N}_\-/]*(?:\/[\p{L}\p{N}_\-/]+)*)/gu;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text))) {
    tags.add(m[2].toLowerCase());
  }
  return [...tags];
}

function noteMatchesQuery(note: Note, q: string) {
  if (!q) return true;
  const hay = (note.title + '\n' + note.content).toLowerCase();
  return hay.includes(q.toLowerCase());
}

// Extended tag/scope matching: real tags + special shortcuts (pinned, today)
function matchesTagScope(note: Note, tagPath: string | null) {
  if (!tagPath) return true;
  if (tagPath === 'pinned://')
    return !!note.pinned && !note.archived && !note.trashed;
  if (tagPath === 'today://') {
    const d1 = new Date(note.updatedAt).toDateString();
    const d2 = new Date().toDateString();
    return d1 === d2 && !note.archived && !note.trashed;
  }
  const tags = extractTags(note.title + '\n' + note.content);
  return tags.some((t) => t === tagPath || t.startsWith(tagPath + '/'));
}

function classNames(...xs: (string | false | null | undefined)[]) {
  return xs.filter(Boolean).join(' ');
}

function formatDate(ts: number) {
  const d = new Date(ts);
  return d.toLocaleString();
}

function titleFromContent(content: string): string {
  const firstLine =
    content.split(/\r?\n/).find((l) => l.trim() !== '') || 'Untitled';
  // Strip markdown markers for cleaner default titles
  return firstLine.replace(/^#+\s*/, '').slice(0, 120);
}

function firstIdOrNull<T extends { id: string }>(arr: T[]): string | null {
  return arr.length > 0 ? arr[0].id : null;
}

function noteInMode(n: Note, mode: ViewMode) {
  if (mode === 'inbox') return !n.archived && !n.trashed;
  if (mode === 'archive') return !!n.archived && !n.trashed;
  return !!n.trashed;
}

// Markdown config
// Create a custom renderer for marked@16+
// Use the correct RendererObject type for marked@16+
const renderer = {
  code({ text, lang }: { text: string; lang?: string | null }) {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre><code class="hljs language-${lang}">${hljs.highlight(text, { language: lang }).value}</code></pre>`;
    }
    return `<pre><code class="hljs">${hljs.highlightAuto(text).value}</code></pre>`;
  },
};
marked.setOptions({
  breaks: true,
  gfm: true,
});
marked.use({ renderer });

// Replace [[Note Title]] with links
function wikilinkToHtml(md: string, notes: Note[]): string {
  const titles = new Map<string, string>(); // title -> id
  notes.forEach((n) => titles.set(n.title.trim().toLowerCase(), n.id));
  return md.replace(/\[\[([^\]]+)\]\]/g, (m, p1) => {
    const key = String(p1).trim().toLowerCase();
    const id = titles.get(key);
    if (!id) return `<span class="text-blue-600">[[${p1}]]</span>`; // unresolved
    return `<a href="#note:${id}" class="text-blue-600 hover:underline">${p1}</a>`;
  });
}

// --- Main Component ---
export default function BearLikeNotesApp() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const existing = loadNotes();
    if (existing.length > 0) return existing;
    // Seed with a welcome note
    const seed: Note = {
      id: uid(),
      title: 'Welcome to Bear-like Notes',
      content:
        `# Welcome to Bear-like Notes\n\n` +
        `This is a local-first, Windows-friendly web app inspired by **Bear**.\n\n` +
        `- Use **Ctrl+N** for a new note.\n` +
        `- Use **Ctrl+K** to quick-open notes.\n` +
        `- Hashtags like #ideas, nested like #work/projects/demo.\n` +
        `- Wikilinks: [[Second Brain]] to jump between notes.\n` +
        `- Tasks: \n  - [ ] A fresh checkbox\n  - [x] A done thing\n\n` +
        `Drag images into the editor to embed them inline.\n\n` +
        `Try some code:\n\n\`\`\`ts\nconst hello: string = "world";\nconsole.log(hello);\n\`\`\`\n\n` +
        `# On Security\n` +
        `Everything lives in your browser storage. Export/Import from Settings for backups.`,
      createdAt: now(),
      updatedAt: now(),
      pinned: true,
    };
    const seed2: Note = {
      id: uid(),
      title: 'Second Brain',
      content:
        `# Second Brain\nLink back to [[Welcome to Bear-like Notes]].\n\n#pkm #zettelkasten\n` +
        `> A note-taking system is a bicycle for your mind.`,
      createdAt: now(),
      updatedAt: now(),
    };
    const initial = [seed, seed2];
    saveNotes(initial);
    localStorage.setItem(LAST_OPEN_KEY, seed.id);
    return initial;
  });

  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('inbox');
  const [selectedId, setSelectedId] = useState<string | null>(() =>
    localStorage.getItem(LAST_OPEN_KEY),
  );
  const [showPreview, setShowPreview] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [settings, setSettings] = useState<SettingsState>(() => loadSettings());
  const [leftPaneOpen, setLeftPaneOpen] = useState(true);

  // Theme handling
  useEffect(() => {
    const root = document.documentElement;
    const preferDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark =
      settings.theme === 'dark' || (settings.theme === 'system' && preferDark);
    root.classList.toggle('dark', !!isDark);
  }, [settings.theme]);

  // Persist
  useEffect(() => saveNotes(notes), [notes]);
  useEffect(() => saveSettings(settings), [settings]);
  useEffect(() => {
    if (selectedId) localStorage.setItem(LAST_OPEN_KEY, selectedId);
  }, [selectedId]);

  // Derived: tag counts
  const tagCounts = useMemo(() => {
    const map = new Map<string, number>();
    notes.forEach((n) => {
      if (n.trashed) return;
      const tags = extractTags(n.title + '\n' + n.content);
      tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1));
    });
    return map;
  }, [notes]);

  // Lists by mode
  const inboxList = useMemo(() => {
    return notes
      .filter((n) => noteInMode(n, 'inbox'))
      .filter((n) => matchesTagScope(n, selectedTag))
      .filter((n) => noteMatchesQuery(n, query))
      .sort((a, b) => {
        if ((a.pinned ? 1 : 0) !== (b.pinned ? 1 : 0))
          return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
        return b.updatedAt - a.updatedAt;
      });
  }, [notes, selectedTag, query]);

  const archiveList = useMemo(() => {
    return notes
      .filter((n) => noteInMode(n, 'archive'))
      .filter((n) => matchesTagScope(n, selectedTag))
      .filter((n) => noteMatchesQuery(n, query))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }, [notes, selectedTag, query]);

  const trashList = useMemo(() => {
    return notes
      .filter((n) => noteInMode(n, 'trash'))
      .filter((n) => noteMatchesQuery(n, query))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }, [notes, query]);

  const list =
    viewMode === 'inbox'
      ? inboxList
      : viewMode === 'archive'
        ? archiveList
        : trashList;

  // Keep selection consistent with current mode
  useEffect(() => {
    const sel = notes.find((n) => n.id === selectedId) || null;
    if (!sel || !noteInMode(sel, viewMode)) {
      setSelectedId(firstIdOrNull(list));
    }
  }, [viewMode, list.length]);

  const selected = useMemo(
    () => notes.find((n) => n.id === selectedId) || (list[0] ?? null),
    [notes, selectedId, list],
  );

  // Keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        handleNew();
      } else if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowPalette(true);
      } else if (e.ctrlKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        window.print();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function handleNew() {
    const n: Note = {
      id: uid(),
      title: 'Untitled',
      content: '',
      createdAt: now(),
      updatedAt: now(),
    };
    setNotes((prev) => [n, ...prev]);
    setSelectedId(n.id);
    setShowPreview(false);
    setViewMode('inbox');
  }

  function updateNote(partial: Partial<Note>) {
    if (!selected) return;
    setNotes((prev) =>
      prev.map((n) =>
        n.id === selected.id ? { ...n, ...partial, updatedAt: now() } : n,
      ),
    );
  }

  function removeNotePermanent(id: string) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  // Editor refs & helpers
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  function wrapSelection(prefix: string, suffix = prefix) {
    const ta = contentRef.current;
    if (!ta) return;
    const start = ta.selectionStart ?? 0;
    const end = ta.selectionEnd ?? 0;
    const before = ta.value.slice(0, start);
    const sel = ta.value.slice(start, end);
    const after = ta.value.slice(end);
    const newVal = before + prefix + sel + suffix + after;
    const newPos = start + prefix.length + sel.length + suffix.length;
    updateNote({ content: newVal });
    requestAnimationFrame(() => {
      ta.focus();
      ta.selectionStart = ta.selectionEnd = newPos;
    });
  }

  function insertAtCursor(text: string) {
    const ta = contentRef.current;
    if (!ta) return;
    const start = ta.selectionStart ?? 0;
    const end = ta.selectionEnd ?? 0;
    const before = ta.value.slice(0, start);
    const after = ta.value.slice(end);
    const newVal = before + text + after;
    updateNote({ content: newVal });
    const newPos = start + text.length;
    requestAnimationFrame(() => {
      ta.focus();
      ta.selectionStart = ta.selectionEnd = newPos;
    });
  }

  function handlePaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (!file) continue;
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result as string;
          insertAtCursor(`\n![](${url})\n`);
        };
        reader.readAsDataURL(file);
        return;
      }
    }
  }

  function handleDrop(e: React.DragEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      insertAtCursor(`\n![](${url})\n`);
    };
    reader.readAsDataURL(file);
  }

  function toggleTaskAtLine(lineIndex: number) {
    if (!selected) return;
    const lines = selected.content.split(/\r?\n/);
    const line = lines[lineIndex];
    if (!line) return;
    const m = /^\s*- \[( |x|X)\]\s/.exec(line);
    if (!m) return;
    const checked = m[1].toLowerCase() === 'x' ? ' ' : 'x';
    lines[lineIndex] = line.replace(/^\s*- \[( |x|X)\]\s/, `- [${checked}] `);
    updateNote({ content: lines.join('\n') });
  }

  // Rendered HTML of current note
  const renderedHtml = useMemo(() => {
    if (!selected) return '';
    const withLinks = wikilinkToHtml(selected.content, notes);
    return marked.parse(withLinks);
  }, [selected?.content, notes]);

  // Click handlers in preview: wikilinks + checkbox toggles
  function onPreviewClick(e: React.MouseEvent<HTMLDivElement>) {
    const a = (e.target as HTMLElement).closest(
      "a[href^='#note:']",
    ) as HTMLAnchorElement | null;
    if (a) {
      e.preventDefault();
      const id = a.getAttribute('href')?.slice('#note:'.length);
      if (id) setSelectedId(id);
      return;
    }

    // Toggle checkboxes
    const target = e.target as HTMLElement;
    if (
      target.tagName.toLowerCase() === 'input' &&
      (target as HTMLInputElement).type === 'checkbox'
    ) {
      const container = target.closest('li');
      if (!container) return;
      // Fallback: just toggle at first checkbox line we find
      const lineIndex =
        selected?.content
          .split(/\r?\n/)
          .findIndex((l) => /^\s*- \[( |x|X)\]/.test(l)) ?? -1;
      if (lineIndex >= 0) toggleTaskAtLine(lineIndex);
    }
  }

  // Export / Import
  function exportAll() {
    const blob = new Blob([JSON.stringify({ notes, settings }, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bearlike-notes-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportCurrentAsMarkdown() {
    if (!selected) return;
    const blob = new Blob([selected.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const filename = (selected.title || 'note')
      .replace(/[^a-z0-9\-_]+/gi, '-')
      .toLowerCase();
    a.href = url;
    a.download = `${filename}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function onImportJson(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (Array.isArray(data.notes)) setNotes(data.notes);
        if (data.settings) setSettings({ ...settings, ...data.settings });
      } catch (err) {
        alert('Invalid backup file');
      }
    };
    reader.readAsText(file);
  }

  // Densities
  const rowPad = settings.density === 'compact' ? 'py-1' : 'py-2';

  // --- Runtime smoke tests (non-blocking) ---
  useEffect(() => {
    try {
      console.group('Bear-like Notes: self-tests');
      // Test: helper firstIdOrNull
      console.assert(
        firstIdOrNull([] as { id: string }[]) === null,
        'firstIdOrNull([]) should be null',
      );
      console.assert(
        firstIdOrNull([{ id: 'a' }]) === 'a',
        "firstIdOrNull([{id:'a'}]) should be 'a'",
      );
      // Test: lucide-react Code icon is available
      console.assert(!!Code, 'lucide-react Code icon should be defined');
      // Test: matchesTagScope logic
      const base: Note = {
        id: '1',
        title: 't',
        content: '#work/x',
        createdAt: now(),
        updatedAt: now(),
        pinned: true,
      };
      console.assert(
        matchesTagScope(base, null) === true,
        'null scope matches',
      );
      console.assert(
        matchesTagScope(base, 'pinned://') === true,
        'pinned scope matches when pinned',
      );
      console.assert(
        matchesTagScope({ ...base, pinned: false }, 'pinned://') === false,
        'pinned scope excludes when not pinned',
      );
      const yesterday = Date.now() - 24 * 60 * 60 * 1000;
      console.assert(
        matchesTagScope({ ...base, updatedAt: yesterday }, 'today://') ===
          false,
        'today scope excludes yesterday',
      );
      console.assert(
        matchesTagScope({ ...base, updatedAt: Date.now() }, 'today://') ===
          true,
        'today scope includes today',
      );
      console.assert(
        matchesTagScope(base, 'work') === true,
        'tag hierarchy matches',
      );
      console.assert(
        matchesTagScope(base, 'work/x') === true,
        'nested tag matches',
      );
      console.assert(
        matchesTagScope(base, 'random') === false,
        'unmatched tag returns false',
      );
      // Test: noteInMode
      const archivedNote: Note = { ...base, archived: true };
      const trashedNote: Note = { ...base, trashed: true };
      console.assert(
        noteInMode(base, 'inbox') &&
          !noteInMode(base, 'archive') &&
          !noteInMode(base, 'trash'),
        'inbox mode works',
      );
      console.assert(noteInMode(archivedNote, 'archive'), 'archive mode works');
      console.assert(noteInMode(trashedNote, 'trash'), 'trash mode works');
    } catch (e) {
      console.warn('Self-test encountered an error', e);
    } finally {
      console.groupEnd();
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* App Header */}
      <header className="flex items-center gap-2 px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 select-none">
        <button
          onClick={() => setLeftPaneOpen((x) => !x)}
          className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
          title="Toggle sidebar"
        >
          <Tags size={18} />
        </button>
        <div className="font-semibold tracking-tight">Bear-like Notes</div>
        <div className="ml-2 flex-1 max-w-xl relative">
          <Search className="absolute left-2 top-2" size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes (Ctrl+K for quick open)"
            className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl pl-8 pr-3 py-2 outline-none border border-transparent focus:border-zinc-300 dark:focus:border-zinc-700"
          />
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() =>
              setSettings((s) => ({
                ...s,
                theme: s.theme === 'dark' ? 'light' : 'dark',
              }))
            }
            className="px-2 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
            title="Toggle theme"
          >
            {document.documentElement.classList.contains('dark') ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <button
            onClick={handleNew}
            className="px-3 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
            title="New note (Ctrl+N)"
          >
            <div className="flex items-center gap-1">
              <Plus size={16} /> New
            </div>
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 min-h-0 flex">
        {/* Sidebar */}
        {leftPaneOpen && (
          <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-3 overflow-y-auto hidden lg:block">
            <Sidebar
              tagCounts={tagCounts}
              selectedTag={selectedTag}
              onSelectTag={(t) => setSelectedTag(t)}
              notes={notes}
              setSelectedId={setSelectedId}
            />
          </aside>
        )}

        {/* Notes list */}
        <section className="w-80 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
          <div className="p-2 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => {
                setViewMode('inbox');
                setSelectedTag(null);
              }}
              className={classNames(
                'px-2 py-1 rounded-lg',
                viewMode === 'inbox'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
              )}
              title="All Notes"
            >
              <FileText size={16} />
            </button>
            <button
              onClick={() => {
                setViewMode('archive');
                setSelectedTag(null);
                setSelectedId(firstIdOrNull(archiveList));
              }}
              className={classNames(
                'px-2 py-1 rounded-lg',
                viewMode === 'archive'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
              )}
              title="Archive"
            >
              <ArchiveIcon size={16} />
            </button>
            <button
              onClick={() => {
                setViewMode('trash');
                setSelectedTag(null);
                setSelectedId(firstIdOrNull(trashList));
              }}
              className={classNames(
                'px-2 py-1 rounded-lg',
                viewMode === 'trash'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
              )}
              title="Trash"
            >
              <Trash size={16} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {list.map((n) => (
              <button
                key={n.id}
                onClick={() => setSelectedId(n.id)}
                className={classNames(
                  'w-full text-left px-3',
                  rowPad,
                  'border-b border-zinc-200/70 dark:border-zinc-800/70 hover:bg-zinc-100 dark:hover:bg-zinc-900',
                  selected?.id === n.id && 'bg-zinc-100 dark:bg-zinc-900',
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium truncate flex items-center gap-1">
                    {n.pinned && viewMode === 'inbox' && (
                      <Pin size={14} className="opacity-70" />
                    )}
                    {n.title || titleFromContent(n.content)}
                  </div>
                  <div className="text-xs opacity-60">
                    {new Date(n.updatedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-xs opacity-70 line-clamp-2">
                  {(n.content || '').replace(/[#*_`>\-[\]]/g, '').slice(0, 160)}
                </div>
              </button>
            ))}
            {list.length === 0 && (
              <div className="p-8 text-center opacity-60">
                {viewMode === 'archive'
                  ? 'No archived notes.'
                  : viewMode === 'trash'
                    ? 'Trash is empty.'
                    : 'No notes match your filters.'}
              </div>
            )}
          </div>
        </section>

        {/* Editor */}
        <main className="flex-1 flex flex-col min-w-0">
          {selected ? (
            <>
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 gap-2">
                <div className="flex items-center gap-2">
                  {viewMode !== 'trash' && (
                    <button
                      onClick={() => updateNote({ pinned: !selected.pinned })}
                      className={classNames(
                        'px-2 py-1 rounded-lg',
                        selected.pinned
                          ? 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                      )}
                      title={selected.pinned ? 'Unpin' : 'Pin'}
                      disabled={viewMode !== 'inbox'}
                    >
                      <Pin size={16} />
                    </button>
                  )}
                  {viewMode !== 'trash' && (
                    <button
                      onClick={() =>
                        updateNote({
                          archived: !selected.archived,
                          trashed: false,
                        })
                      }
                      className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      title={selected.archived ? 'Unarchive' : 'Archive'}
                    >
                      <ArchiveIcon size={16} />
                    </button>
                  )}
                  <button
                    onClick={() =>
                      updateNote({
                        trashed: !selected.trashed,
                        archived: false,
                      })
                    }
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    title={selected.trashed ? 'Restore' : 'Move to Trash'}
                  >
                    <Trash size={16} />
                  </button>
                  <span className="text-xs opacity-60 hidden md:inline">
                    Updated {formatDate(selected.updatedAt)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setShowPreview((x) => !x)}
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    title={showPreview ? 'Edit' : 'Preview'}
                  >
                    {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  <button
                    onClick={exportCurrentAsMarkdown}
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    title="Export as .md"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    title="Print"
                  >
                    <Printer size={16} />
                  </button>
                  <label
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                    title="Import backup (.json)"
                  >
                    <Upload size={16} />
                    <input
                      type="file"
                      accept="application/json"
                      className="hidden"
                      onChange={onImportJson}
                    />
                  </label>
                  <button
                    onClick={exportAll}
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    title="Export all (.json)"
                  >
                    <RefreshCcw size={16} />
                  </button>
                </div>
              </div>

              {/* Title */}
              <div className="px-4 pt-3">
                <input
                  ref={titleRef}
                  value={selected.title}
                  onChange={(e) => updateNote({ title: e.target.value })}
                  placeholder="Title"
                  className="w-full bg-transparent text-2xl md:text-3xl font-semibold outline-none placeholder:opacity-50"
                />
              </div>

              {/* Toolbar */}
              {!showPreview && (
                <div className="px-3 py-2 flex items-center gap-1 border-b border-zinc-200 dark:border-zinc-800 flex-wrap">
                  <EditorButton
                    icon={<Bold size={16} />}
                    label="Bold"
                    onClick={() => wrapSelection('**', '**')}
                  />
                  <EditorButton
                    icon={<Italic size={16} />}
                    label="Italic"
                    onClick={() => wrapSelection('*', '*')}
                  />
                  <EditorButton
                    icon={<Code size={16} />}
                    label="Code"
                    onClick={() => wrapSelection('`', '`')}
                  />
                  <EditorButton
                    icon={<HeadingIcon size={16} />}
                    label="H1"
                    onClick={() => insertAtCursor('\n# ')}
                  />
                  <EditorButton
                    icon={<List size={16} />}
                    label="List"
                    onClick={() => insertAtCursor('\n- ')}
                  />
                  <EditorButton
                    icon={<ListChecks size={16} />}
                    label="Task"
                    onClick={() => insertAtCursor('\n- [ ] ')}
                  />
                  <EditorButton
                    icon={<LinkIcon size={16} />}
                    label="Link"
                    onClick={() => insertAtCursor('[text](https://)')}
                  />
                  <EditorButton
                    icon={<Hash size={16} />}
                    label="#Tag"
                    onClick={() => insertAtCursor(' #tag')}
                  />
                  <label
                    className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-1"
                    title="Insert image"
                  >
                    <ImageIcon size={16} /> Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (!f) return;
                        const reader = new FileReader();
                        reader.onload = () =>
                          insertAtCursor(`\n![](${reader.result})\n`);
                        reader.readAsDataURL(f);
                      }}
                    />
                  </label>
                  <div className="ml-auto flex items-center gap-2">
                    <label className="flex items-center gap-2 text-xs opacity-70">
                      Font
                      <input
                        type="range"
                        min={12}
                        max={22}
                        value={settings.editorFontSize}
                        onChange={(e) =>
                          setSettings((s) => ({
                            ...s,
                            editorFontSize: Number(e.target.value),
                          }))
                        }
                      />
                    </label>
                    <select
                      value={settings.density}
                      onChange={(e) =>
                        setSettings((s) => ({
                          ...s,
                          density: e.target.value as SettingsState['density'],
                        }))
                      }
                      className="bg-transparent border rounded-lg px-2 py-1 text-sm"
                      title="Row density"
                    >
                      <option value="cozy">Cozy</option>
                      <option value="compact">Compact</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Editor / Preview */}
              <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2">
                {/* Editor */}
                {!showPreview && (
                  <div className="p-3 border-r border-zinc-200 dark:border-zinc-800 min-h-0">
                    <textarea
                      ref={contentRef}
                      value={selected.content}
                      onChange={(e) =>
                        updateNote({
                          content: e.target.value,
                          title:
                            selected.title || titleFromContent(e.target.value),
                        })
                      }
                      onPaste={handlePaste}
                      onDrop={handleDrop}
                      placeholder="Start writing… Use #tags and [[wikilinks]]."
                      className="w-full h-full resize-none bg-transparent outline-none"
                      style={{
                        fontSize: settings.editorFontSize,
                        lineHeight: 1.6,
                      }}
                    />
                  </div>
                )}

                {/* Preview */}
                <div
                  className={classNames(
                    'p-5 overflow-auto prose dark:prose-invert max-w-none',
                    showPreview ? 'md:col-span-2' : '',
                  )}
                  onClick={onPreviewClick}
                  dangerouslySetInnerHTML={{ __html: renderedHtml }}
                />
              </div>
            </>
          ) : (
            <div className="m-auto text-center opacity-60">
              <FileText className="mx-auto mb-2" />
              {viewMode === 'archive'
                ? 'No archived notes.'
                : viewMode === 'trash'
                  ? 'Trash is empty.'
                  : 'Select or create a note.'}
            </div>
          )}
        </main>
      </div>

      {/* Command Palette (Quick Open) */}
      {showPalette && (
        <PaletteModal
          notes={notes.filter((n) => !n.trashed)}
          onClose={() => setShowPalette(false)}
          onOpen={(id) => {
            setSelectedId(id);
            setShowPalette(false);
          }}
        />
      )}

      {/* Print styles */}
      <style>{`
        @media print {
          header, aside, section { display: none !important; }
          main { width: 100% !important; }
        }
        .prose img { max-width: 100%; border-radius: 0.5rem; }
        .prose pre { border-radius: 0.5rem; }
        .prose code { font-size: 0.95em; }
      `}</style>
    </div>
  );
}

// --- Sidebar Component ---
function Sidebar({
  tagCounts,
  selectedTag,
  onSelectTag,
  notes,
  setSelectedId,
}: {
  tagCounts: Map<string, number>;
  selectedTag: string | null;
  onSelectTag: (t: string | null) => void;
  notes: Note[];
  setSelectedId: (id: string | null) => void;
}) {
  // Build top-level tag list
  const topLevel = useMemo(() => {
    const set = new Set<string>();
    tagCounts.forEach((_count, tag) => set.add(tag.split('/')[0]));
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [tagCounts]);

  function childrenOf(tag: string) {
    const kids = new Set<string>();
    const prefix = tag + '/';
    tagCounts.forEach((_count, t) => {
      if (t.startsWith(prefix)) {
        const rest = t.slice(prefix.length);
        const first = rest.split('/')[0];
        kids.add(tag + '/' + first);
      }
    });
    return [...kids].sort((a, b) => a.localeCompare(b));
  }

  const counts = (tag: string) => tagCounts.get(tag) || 0;

  // Smart views
  const allNotes = notes.filter((n) => !n.archived && !n.trashed);
  const pinned = allNotes.filter((n) => n.pinned);
  const today = allNotes.filter(
    (n) => new Date(n.updatedAt).toDateString() === new Date().toDateString(),
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xs uppercase tracking-wide opacity-60 px-2">
        Shortcuts
      </div>
      <div className="flex flex-col">
        <SidebarRow
          icon={<FileText size={16} />}
          label={`All Notes (${allNotes.length})`}
          active={selectedTag === null}
          onClick={() => onSelectTag(null)}
        />
        <SidebarRow
          icon={<Star size={16} />}
          label={`Pinned (${pinned.length})`}
          onClick={() => onSelectTag('pinned://')}
        />
        <SidebarRow
          icon={<Tags size={16} />}
          label={`Today (${today.length})`}
          onClick={() => onSelectTag('today://')}
        />
      </div>

      <div className="text-xs uppercase tracking-wide opacity-60 px-2 mt-2">
        Tags
      </div>
      <div className="flex flex-col">
        {topLevel.map((t) => (
          <TagBranch
            key={t}
            tag={t}
            counts={counts}
            childrenOf={childrenOf}
            selectedTag={selectedTag}
            onSelectTag={onSelectTag}
          />
        ))}
        {topLevel.length === 0 && (
          <div className="px-2 py-1 text-sm opacity-60">Add #tags in notes</div>
        )}
      </div>

      <div className="text-xs uppercase tracking-wide opacity-60 px-2 mt-2">
        Archive & Trash
      </div>
      <div className="flex flex-col">
        <SidebarRow
          icon={<ArchiveIcon size={16} />}
          label={`Archive (${notes.filter((n) => n.archived && !n.trashed).length})`}
          onClick={() => {
            const first = notes.find((n) => n.archived && !n.trashed);
            if (first) setSelectedId(first.id);
          }}
        />
        <SidebarRow
          icon={<Trash size={16} />}
          label={`Trash (${notes.filter((n) => n.trashed).length})`}
          onClick={() => {
            const first = notes.find((n) => n.trashed);
            if (first) setSelectedId(first.id);
          }}
        />
      </div>
    </div>
  );
}

function SidebarRow({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex items-center gap-2 px-2 py-1 rounded-lg text-sm',
        active
          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
      )}
    >
      {icon}
      <span className="truncate">{label}</span>
    </button>
  );
}

function TagBranch({
  tag,
  counts,
  childrenOf,
  selectedTag,
  onSelectTag,
}: {
  tag: string;
  counts: (t: string) => number;
  childrenOf: (t: string) => string[];
  selectedTag: string | null;
  onSelectTag: (t: string | null) => void;
}) {
  const [open, setOpen] = useState(true);
  const kids = childrenOf(tag);
  return (
    <div className="px-1">
      <div className="flex items-center">
        {kids.length > 0 && (
          <button
            onClick={() => setOpen((x) => !x)}
            className="px-1 py-0.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 mr-1"
            title={open ? 'Collapse' : 'Expand'}
          >
            {open ? '▾' : '▸'}
          </button>
        )}
        <button
          onClick={() => onSelectTag(tag)}
          className={classNames(
            'flex-1 text-left px-2 py-1 rounded-lg text-sm',
            selectedTag === tag
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
              : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
          )}
        >
          #{tag} <span className="opacity-60">({counts(tag)})</span>
        </button>
      </div>
      {open && kids.length > 0 && (
        <div className="ml-5 mt-1 flex flex-col gap-1">
          {kids.map((c) => (
            <button
              key={c}
              onClick={() => onSelectTag(c)}
              className={classNames(
                'text-left px-2 py-1 rounded-lg text-sm',
                selectedTag === c
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'hover:bg-zinc-100 dark:hover:bg-zinc-800',
              )}
            >
              #{c} <span className="opacity-60">({counts(c)})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function EditorButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm flex items-center gap-1"
      title={label}
    >
      {icon} <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function PaletteModal({
  notes,
  onClose,
  onOpen,
}: {
  notes: Note[];
  onClose: () => void;
  onOpen: (id: string) => void;
}) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const list = useMemo(() => {
    const hay = q.toLowerCase();
    return notes
      .filter((n) => (n.title + '\n' + n.content).toLowerCase().includes(hay))
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .slice(0, 30);
  }, [q, notes]);

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center p-8 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 p-3 border-b border-zinc-200 dark:border-zinc-800">
          <Search size={16} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Quick open…"
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <X size={16} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {list.map((n) => (
            <button
              key={n.id}
              onClick={() => onOpen(n.id)}
              className="w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <div className="font-medium truncate">
                {n.title || titleFromContent(n.content)}
              </div>
              <div className="text-xs opacity-70 line-clamp-1">
                {(n.content || '').replace(/[#*_`>\-[\]]/g, '').slice(0, 200)}
              </div>
            </button>
          ))}
          {list.length === 0 && (
            <div className="p-6 text-center opacity-60">No matches</div>
          )}
        </div>
      </div>
    </div>
  );
}
