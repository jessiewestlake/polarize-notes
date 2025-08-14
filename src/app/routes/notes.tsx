import { useSelector } from 'react-redux';
import { useState } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import Editor from '../components/Editor';
import { selectNotes } from '../features/notes/selectors';

const Notes = () => {
  const allNotes = useSelector(selectNotes);
  const [query, setQuery] = useState('');
  const noteCount = allNotes.length;

  return (
    <div className="flex flex-col p-4 gap-4">
      <SearchBar onSearch={setQuery} />
      {query && (
        <div className="text-sm text-gray-500">Searching for: {query}</div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <Editor />
        <div className="p-4 border rounded-lg shadow-md">
          Preview
          <div className="text-xs text-gray-500 mt-2">
            Total notes: {noteCount}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500">Showing {noteCount} notes</div>
      <NoteList />
    </div>
  );
};

export default Notes;
