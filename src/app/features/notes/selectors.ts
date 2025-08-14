import { RootState } from '../../state/store';
import type { Note } from './types';

export const selectNotes = (state: RootState) => state.notes.items;

export const selectNoteById = (state: RootState, noteId: string) =>
  state.notes.items.find((note: Note) => note.id === noteId);

export const selectNotesLoading = (state: RootState) => state.notes.loading;

export const selectNotesError = (state: RootState) => state.notes.error;
