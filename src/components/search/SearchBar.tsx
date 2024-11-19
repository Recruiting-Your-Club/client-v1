import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';  

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={!isFocused ? '검색' : ''}
        className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <MagnifyingGlassIcon className="relative right-8 top-1/2   w-5 h-5 text-gray-500" />
    </div>
  );
};

export default SearchBar;