import { useEffect } from 'react';

type HotkeyMap = Record<string, () => void>;
type HotkeyTuple = [string, () => void];

function isTuple(v: unknown): v is HotkeyTuple {
  return (
    Array.isArray(v) && typeof v[0] === 'string' && typeof v[1] === 'function'
  );
}

const isMac =
  typeof navigator !== 'undefined' && /mac/i.test(navigator.platform);

const normalizeToken = (t: string) => {
  const k = t.trim().toLowerCase();
  if (k === 'cmd' || k === 'command' || k === 'meta') return 'meta';
  if (k === 'control' || k === 'ctrl') return 'ctrl';
  if (k === 'option' || k === 'alt') return 'alt';
  if (k === 'mod') return isMac ? 'meta' : 'ctrl';
  if (k === 'return') return 'enter';
  if (k === 'escape') return 'esc';
  if (k === 'spacebar' || k === ' ') return 'space';
  return k;
};

const normalizeCombo = (combo: string) => {
  const parts = combo.split('+').map(normalizeToken).filter(Boolean);
  const mods = new Set<string>();
  let key = '';
  for (const p of parts) {
    if (p === 'ctrl' || p === 'shift' || p === 'alt' || p === 'meta') {
      mods.add(p);
    } else {
      key = p;
    }
  }
  const orderedMods = ['ctrl', 'shift', 'alt', 'meta'].filter((m) =>
    mods.has(m),
  );
  return [...orderedMods, key].filter(Boolean).join('+');
};

const eventToCombo = (e: KeyboardEvent) => {
  let k = e.key.toLowerCase();
  if (k === ' ') k = 'space';
  if (k === 'escape') k = 'esc';
  const mods: string[] = [];
  if (e.ctrlKey) mods.push('ctrl');
  if (e.shiftKey) mods.push('shift');
  if (e.altKey) mods.push('alt');
  if (e.metaKey) mods.push('meta');
  const orderedMods = ['ctrl', 'shift', 'alt', 'meta'].filter((m) =>
    mods.includes(m),
  );
  return [...orderedMods, k].join('+');
};

// Overloads
function useHotkeys(hotkeys: HotkeyMap): void;
function useHotkeys(combo: string, handler: () => void): void;
function useHotkeys(tuple: HotkeyTuple): void;
function useHotkeys(tuples: HotkeyTuple[]): void;

// Impl
function useHotkeys(
  arg: HotkeyMap | string | HotkeyTuple | HotkeyTuple[],
  handlerMaybe?: () => void,
) {
  useEffect(() => {
    // Build a normalized bindings map
    const bindings: HotkeyMap = {};

    const add = (combo: string, fn: () => void) => {
      if (typeof combo === 'string' && typeof fn === 'function') {
        bindings[normalizeCombo(combo)] = fn;
      }
    };

    if (typeof arg === 'string' && typeof handlerMaybe === 'function') {
      add(arg, handlerMaybe);
    } else if (isTuple(arg)) {
      add(arg[0], arg[1]);
    } else if (Array.isArray(arg)) {
      for (const t of arg) if (isTuple(t)) add(t[0], t[1]);
    } else if (arg && typeof arg === 'object') {
      for (const [combo, fn] of Object.entries(arg as HotkeyMap)) {
        if (typeof fn === 'function') add(combo, fn);
      }
    }

    if (!Object.keys(bindings).length) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const current = eventToCombo(event);
      const normalized = normalizeCombo(current);
      const fn = bindings[normalized];
      if (fn) {
        event.preventDefault();
        fn();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [arg, handlerMaybe]);
}

export default useHotkeys;
