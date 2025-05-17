const MovieDetails = ({
  title,
  releaseDate,
  overview,
}: {
  title: string;
  releaseDate: string;
  overview: string;
}) => (
  <div className="relative z-10">
    <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
      {title}
    </h1>
    <p className="mt-2 text-gray-400 text-lg">{releaseDate}</p>
    <div className="mt-4 text-base leading-relaxed text-gray-300">
      {overview}
    </div>
  </div>
);

export default MovieDetails;
