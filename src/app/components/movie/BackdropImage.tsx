"use client";
import { motion } from "framer-motion";

const BackdropImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative overflow-hidden rounded-lg shadow-2xl">
    <motion.img
      src={`https://image.tmdb.org/t/p/w1280${src}`}
      alt={alt}
      className="w-full h-[450px] md:h-[550px] object-cover"
      initial={{ scale: 1 }}
      animate={{ scale: 1.08 }}
      transition={{ duration: 20, ease: "easeOut" }}
    />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-black/40 via-transparent to-black/40" />
    <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
  </div>
);

export default BackdropImage;
