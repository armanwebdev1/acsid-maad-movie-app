"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link href="/">
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(229,9,20,0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center gap-1.5 sm:gap-2 
          px-3 sm:px-5 py-1.5 sm:py-2 
          rounded-full font-semibold text-white 
          bg-black/40 backdrop-blur-md border border-white/10 
          transition-colors duration-300 hover:bg-netflix-red
          text-sm sm:text-base
        "
      >
        <FiArrowLeft className="text-base sm:text-lg" />
        <span>Back to Home</span>
      </motion.button>
    </Link>
  </motion.div>
);

export default BackButton;
