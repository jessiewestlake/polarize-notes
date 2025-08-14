import useHotkeys from '../hooks/useHotkeys';
import { addNote } from '../features/notes/notesSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../state/store';

const shortcuts = {
  newNote: 'ctrl+n',
  saveNote: 'ctrl+s',
  toggleSidebar: 'ctrl+b',
  searchNotes: 'ctrl+f',
  togglePreview: 'ctrl+p',
};

export const useShortcuts = () => {
  const dispatch = useDispatch<AppDispatch>();
  useHotkeys([
    shortcuts.newNote,
    () => {
      // Logic to create a new note
      (async () => {
        const newNote = await createNote();
        dispatch(addNote(newNote));
      })();
    },
  ]);

  useHotkeys(shortcuts.saveNote, () => {
    // Logic to save the current note
  });

  useHotkeys(shortcuts.toggleSidebar, () => {
    // Logic to toggle the sidebar visibility
  });

  useHotkeys(shortcuts.searchNotes, () => {
    // Logic to open the search bar
  });

  useHotkeys(shortcuts.togglePreview, () => {
    // Logic to toggle the markdown preview
  });
};

async function createNote() {
  const now = new Date();
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  return {
    id,
    title: 'Untitled',
    content: '',
    createdAt: now,
    updatedAt: now,
    tags: [] as string[],
  };
}
