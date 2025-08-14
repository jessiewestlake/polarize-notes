import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/state/store';
import AppRoutes from './app/routes';
import Sidebar from './app/components/Sidebar';
import './index.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="h-screen flex flex-col">
          <header className="p-4 border-b bg-white">
            <h1>Markdown Notes Editor</h1>
          </header>
          <div className="flex flex-1 overflow-hidden">
            <nav aria-label="Sidebar" className="h-full">
              <Sidebar />
            </nav>
            <main className="flex-1 overflow-auto p-4">
              <AppRoutes />
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
