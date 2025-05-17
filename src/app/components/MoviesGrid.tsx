// components/MoviesGrid.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Movie } from "../types";

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
    <h2 className="text-2xl font-bold mb-4">Movies</h2>
    {loading ? (
      <p className="text-gray-400 text-center">Loading movies...</p>
    ) : error ? (
      <p className="text-red-500 text-center">Failed to load movies.</p>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover hover:opacity-90 transition"
              />
              <div className="p-3">
                <h3 className="text-md font-semibold truncate hover:text-netflix-red transition">
                  {movie.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{movie.release_date?.slice(0, 4)}</span>
                  <span>⭐ {Math.round(movie.vote_average * 10) / 10}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </section>
);

export default MoviesGrid;
