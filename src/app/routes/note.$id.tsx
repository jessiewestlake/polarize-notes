import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNoteById } from '../features/notes/selectors';
import type { RootState } from '../state/store';
import MarkdownPreview from '../components/MarkdownPreview';
import Editor from '../components/Editor';

const Note = () => {
  const { id } = useParams();
  const note = useSelector((state: RootState) =>
    selectNoteById(state, id || ''),
  );

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <Editor value={note.content} />
      <MarkdownPreview content={note.content} />
    </div>
  );
};

export default Note;
