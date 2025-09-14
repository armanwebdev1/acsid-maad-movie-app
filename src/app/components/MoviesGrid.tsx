"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Movie } from "../types";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const MoviesGrid = ({
  movies,
  loading,
  error,
}: {
  movies: Movie[];
  loading: boolean;
  error: boolean;
}) => (
  <section className="px-8 pb-6 mt-8">
    <h2 className="text-2xl font-bold mb-6 text-white tracking-wide">Movies</h2>

    {loading ? (
      <p className="text-gray-400 text-center">Loading movies...</p>
    ) : error ? (
      <p className="text-red-500 text-center">Failed to load movies.</p>
    ) : (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {movies.map((movie) => (
          <motion.div key={movie.id} variants={cardVariants}>
            <Link href={`/movie/${movie.id}`}>
              <div className="relative rounded-xl overflow-hidden group cursor-pointer bg-gray-900 shadow-lg">
                {/* Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <h3
                    className="text-md font-semibold text-white truncate group-hover:text-netflix-red transition-colors duration-300"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {movie.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-200 mt-1 backdrop-blur-sm bg-black/40 px-2 py-1 rounded-full">
                    <span>{movie.release_date?.slice(0, 4) || "—"}</span>
                    <span>⭐ {Math.round(movie.vote_average * 10) / 10}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    )}
  </section>
);

export default MoviesGrid;
