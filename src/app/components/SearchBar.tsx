// components/SearchBar.tsx
"use client";
import React from "react";

const SearchBar = ({
  query,
  setQuery,
  onSearch,
}: {
  query: string;
  setQuery: (q: string) => void;
  onSearch: () => void;
}) => {
  return (
    <div className="px-8 mt-8 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search movies..."
        className="bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-netflix-red transition ease-in-out duration-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="bg-netflix-red text-white px-5 py-2 rounded-lg hover:bg-red-700 transition ease-in-out duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
