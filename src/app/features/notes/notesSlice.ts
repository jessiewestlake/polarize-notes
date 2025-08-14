import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from './types';

interface NotesState {
  items: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  items: [],
  loading: false,
  error: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    fetchNotesStart(state: NotesState) {
      state.loading = true;
      state.error = null;
    },
    fetchNotesSuccess(state: NotesState, action: PayloadAction<Note[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchNotesFailure(state: NotesState, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addNote(state: NotesState, action: PayloadAction<Note>) {
      state.items.push(action.payload);
    },
    updateNote(state: NotesState, action: PayloadAction<Note>) {
      const index = state.items.findIndex(
        (note) => note.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteNote(state: NotesState, action: PayloadAction<string>) {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
  },
});

export const {
  fetchNotesStart,
  fetchNotesSuccess,
  fetchNotesFailure,
  addNote,
  updateNote,
  deleteNote,
} = notesSlice.actions;

export default notesSlice.reducer;
