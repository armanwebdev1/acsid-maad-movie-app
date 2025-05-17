import React, { RefObject } from "react";

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
}) => (
  <section className="relative px-8 mt-8">
    <h2 className="text-2xl font-bold mb-4">Trends Now</h2>
    <div className="relative flex items-center">
      <button
        onClick={scrollLeft}
        className="absolute left-0 p-2 z-10 rounded-full hover:bg-gray-700 transition ease-in-out duration-300 -translate-y-1/2 top-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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
      </button>
      <div
        ref={genresContainerRef as RefObject<HTMLDivElement>}
        className="flex gap-3 overflow-x-auto scrollbar-hide mx-10"
      >
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(String(genre.id))}
            className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition duration-300 ${
              selectedGenre === String(genre.id)
                ? "border-b-4 border-netflix-red"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 p-2 rounded-full hover:bg-gray-700 transition ease-in-out duration-300 -translate-y-1/2 top-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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
      </button>
    </div>
  </section>
);

export default GenreScroller;
