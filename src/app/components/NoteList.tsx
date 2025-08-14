import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import type { Note } from '../features/notes/types';

const NoteList: React.FC = () => {
  const notes = useSelector(
    (state: RootState) => state.notes.items || ([] as Note[]),
  );

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes available. Create a new note!</p>
      ) : (
        notes.map((note: Note) => (
          <div key={note.id} className="p-2 border-b">
            {note.title || 'Untitled'}
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
