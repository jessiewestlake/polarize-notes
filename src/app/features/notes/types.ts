export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

export type CreateNotePayload = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateNotePayload = Partial<Omit<Note, 'id' | 'createdAt'>>;
