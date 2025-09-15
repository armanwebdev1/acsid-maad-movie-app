"use client";
import React, { RefObject } from "react";
import { motion } from "framer-motion";

interface Genre {
  id: number;
  name: string;
}

interface Props {
  genres: Genre[];
  selectedGenre: string;
  setSelectedGenre: (id: string) => void;
  genresContainerRef: RefObject<HTMLDivElement | null>;
  scrollLeft: () => void;
  scrollRight: () => void;
}

const GenreScroller: React.FC<Props> = ({
  genres,
  selectedGenre,
  setSelectedGenre,
  genresContainerRef,
  scrollLeft,
  scrollRight,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="px-4 sm:px-8 mt-6 sm:mt-8"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white tracking-wide"
      >
        Trends Now
      </motion.h2>

      {/* Scroller container */}
      <div className="flex items-center bg-black/40 backdrop-blur-sm rounded-full overflow-hidden">
        {/* Left scroll button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollLeft}
          className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-white hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Genre buttons */}
        <div
          ref={genresContainerRef as RefObject<HTMLDivElement>}
          className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-2 py-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {genres.map((genre, i) => (
            <motion.button
              key={genre.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedGenre(String(genre.id))}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 whitespace-nowrap rounded-full text-xs sm:text-sm font-medium transition duration-300 ${
                selectedGenre === String(genre.id)
                  ? "bg-netflix-red text-white shadow-[0_0_10px_rgba(229,9,20,0.8)]"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {genre.name}
            </motion.button>
          ))}
        </div>

        {/* Right scroll button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollRight}
          className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-white hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default GenreScroller;
