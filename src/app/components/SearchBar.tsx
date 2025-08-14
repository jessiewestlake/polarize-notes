import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="flex items-center border-b border-gray-300 py-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search notes..."
        className="flex-grow p-2 outline-none"
      />
    </div>
  );
};

export default SearchBar;
