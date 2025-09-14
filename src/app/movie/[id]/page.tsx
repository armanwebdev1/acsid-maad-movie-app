import type { Metadata } from "next";
import { fetchMovieDetails, fetchSimilarMovies } from "../../lib/tmdb";
import BackButton from "../../components/movie/BackButton";
import BackdropImage from "../../components/movie/BackdropImage";
import MovieDetails from "../../components/movie/MovieDetails";
import SimilarMovies from "../../components/movie/SimilarMovies";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movie = await fetchMovieDetails(params.id);

  return {
    title: `${movie.title} | Movie App`,
    description: movie.overview || "Movie details and similar recommendations.",
    openGraph: {
      title: `${movie.title} | Movie App`,
      description: movie.overview || "",
      images: movie.backdrop_path
        ? [`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`]
        : ["/og-fallback.jpg"],
    },
  };
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovieDetails(params.id);
  const similar = await fetchSimilarMovies(params.id);

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mt-8">
        <div className="absolute top-6 left-6 z-20">
          <BackButton />
        </div>

        {movie.backdrop_path ? (
          <BackdropImage src={movie.backdrop_path} alt={movie.title} />
        ) : (
          <div className="w-full h-[450px] bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Image not available</p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        <div className="p-6 bg-gradient-to-b from-black/60 via-black/30 to-transparent rounded-xl shadow-lg backdrop-blur-sm border border-white/10">
          <MovieDetails
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
          />
        </div>

        <div className="p-4 bg-black/30 rounded-xl shadow-lg backdrop-blur-sm border border-white/5">
          <SimilarMovies movies={similar.results || []} />
        </div>
      </div>

      <div className="h-20 bg-gradient-to-b from-transparent to-[#141414]" />
    </div>
  );
}
