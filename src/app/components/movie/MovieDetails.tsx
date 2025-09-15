"use client";
import { motion } from "framer-motion";

const MovieDetails = ({
  title,
  releaseDate,
  overview,
}: {
  title: string;
  releaseDate: string;
  overview: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-20 max-w-4xl px-4 sm:px-0"
  >
    <h1
      className="
        text-2xl sm:text-4xl
        font-extrabold tracking-wide 
        mb-1 sm:mb-2 
        leading-snug sm:leading-tight
      "
      style={{ textShadow: "0 4px 12px rgba(0,0,0,0.85)" }}
    >
      {title}
    </h1>

    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4">
      {releaseDate
        ? new Date(releaseDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "—"}
    </p>

    <p
      className="
        text-sm sm:text-base md:text-lg 
        leading-relaxed sm:leading-loose 
        text-gray-200 
        max-w-2xl sm:max-w-3xl
      "
    >
      {overview || "No overview available."}
    </p>
  </motion.div>
);

export default MovieDetails;
