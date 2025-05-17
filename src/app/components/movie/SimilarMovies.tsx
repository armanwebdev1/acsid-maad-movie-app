import Link from "next/link";

const SimilarMovies = ({ movies }: { movies: any[] }) => (
  <div className="relative z-10">
    <h2 className="text-3xl font-semibold border-b border-gray-700 pb-2">
      Similar Movies
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
      {movies.slice(0, 8).map((smovie) => (
        <Link key={smovie.id} href={`/movie/${smovie.id}`}>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <img
              src={`https://image.tmdb.org/t/p/w500${smovie.poster_path}`}
              alt={smovie.title}
              className="w-full h-60 object-cover transition duration-300 hover:opacity-90"
            />
            <div className="p-3">
              <h3 className="text-md font-semibold truncate">{smovie.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default SimilarMovies;
