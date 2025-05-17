const BackdropImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative">
    <img
      src={`https://image.tmdb.org/t/p/w1280${src}`}
      alt={alt}
      className="w-full h-[450px] object-cover rounded-lg shadow-2xl"
    />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
  </div>
);

export default BackdropImage;
