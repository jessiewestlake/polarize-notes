import { Routes, Route } from 'react-router-dom';
import Notes from './notes';
import Note from './note.$id';
import Tags from './tags';
import Settings from './settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:id" element={<Note />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
