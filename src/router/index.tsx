import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from '../app/routes/notes';
import Note from '../app/routes/note.$id';
import Tags from '../app/routes/tags';
import Settings from '../app/routes/settings';
import Home from '../app/routes/index';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
