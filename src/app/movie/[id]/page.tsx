import { fetchMovieDetails, fetchSimilarMovies } from "../../lib/tmdb";
import BackButton from "../../components/movie/BackButton";
import BackdropImage from "../../components/movie/BackdropImage";
import MovieDetails from "../../components/movie/MovieDetails";
import SimilarMovies from "../../components/movie/SimilarMovies";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movie = await fetchMovieDetails(params.id);

  return {
    title: movie.title,
    description:
      movie.overview || `Details and information about ${movie.title}.`,
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
      <div className="max-w-4xl mx-auto px-4 py-6">
        <BackButton />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {movie.backdrop_path ? (
          <BackdropImage src={movie.backdrop_path} alt={movie.title} />
        ) : (
          <div className="w-full h-[450px] bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Image not available</p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <MovieDetails
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
        />
        <SimilarMovies movies={similar.results || []} />
      </div>

      <div className="h-20 bg-gradient-to-b from-transparent to-[#141414]"></div>
    </div>
  );
}
