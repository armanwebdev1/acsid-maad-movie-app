"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="px-8 mt-8"
    >
      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/10 focus-within:border-netflix-red transition-colors duration-300">
        <FiSearch className="text-gray-400 text-lg" />

        <input
          type="text"
          placeholder="Search movies..."
          className="bg-transparent text-white placeholder-gray-400 flex-1 focus:outline-none text-sm sm:text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSearch}
          className="bg-netflix-red text-white px-5 py-1.5 rounded-full hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base font-medium shadow-[0_0_10px_rgba(229,9,20,0.5)]"
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
