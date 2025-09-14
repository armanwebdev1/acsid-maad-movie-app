"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Movie } from "../types";

const HeroSection = ({ movie }: { movie: Movie }) => {
  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/fallback.jpg";

  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <section className="relative w-full h-[80vh] overflow-hidden cursor-pointer group">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/40 z-10 transition duration-500 group-hover:bg-black/50" />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />

        <div className="absolute inset-0 z-30 flex flex-col justify-end px-8 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-extrabold text-white mb-3 group-hover:underline"
          >
            {movie.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 max-w-xl line-clamp-3 mb-5"
          >
            {movie.overview}
          </motion.p>
        </div>
      </section>
    </Link>
  );
};

export default HeroSection;
