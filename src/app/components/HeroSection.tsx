"use client";
import React from "react";
import Link from "next/link";
import { Movie } from "../types";

const HeroSection = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <section
        className="relative w-full h-[80vh] bg-cover bg-center overflow-hidden cursor-pointer group"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10 transition duration-300 group-hover:bg-black/50" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 pb-10">
          <h1 className="text-5xl font-extrabold text-white mb-3 group-hover:underline">
            {movie.title}
          </h1>
          <p className="text-gray-300 max-w-xl line-clamp-3 mb-5">
            {movie.overview}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default HeroSection;
