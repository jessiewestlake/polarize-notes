import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 border-b">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        New Note
      </button>
      <div className="flex space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
