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
      <section
        className="
          relative w-full 
          h-[70vh] sm:h-[80vh] 
          overflow-hidden cursor-pointer group
        "
      >
        {/* Background image with slow zoom */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "easeOut" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 transition duration-500 group-hover:bg-black/50" />

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />

        {/* Content */}
        <div
          className="
            absolute inset-0 z-30 
            flex flex-col justify-end 
            px-4 sm:px-8 pb-6 sm:pb-10
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="
              text-3xl sm:text-5xl 
              font-extrabold text-white mb-2 sm:mb-3 
              group-hover:underline
            "
          >
            {movie.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="
              text-sm sm:text-base 
              text-gray-300 
              max-w-md sm:max-w-xl 
              line-clamp-2 sm:line-clamp-3 
              mb-3 sm:mb-5
            "
          >
            {movie.overview}
          </motion.p>
        </div>
      </section>
    </Link>
  );
};

export default HeroSection;
