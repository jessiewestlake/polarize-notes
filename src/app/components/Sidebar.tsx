import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-bold mb-4">Markdown Notes</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="/notes" className="hover:text-gray-400">
              Notes
            </a>
          </li>
          <li className="mb-2">
            <a href="/tags" className="hover:text-gray-400">
              Tags
            </a>
          </li>
          <li className="mb-2">
            <a href="/settings" className="hover:text-gray-400">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
