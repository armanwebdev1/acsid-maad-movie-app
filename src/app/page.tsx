"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchMovies, fetchGenres } from "./lib/tmdb";
import { Movie, Genre } from "./types";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import GenreScroller from "./components/GenreScroller";
import MoviesGrid from "./components/MoviesGrid";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [heroMovie, setHeroMovie] = useState<Movie | null>(null);

  const genresContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () =>
    genresContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });

  const scrollRight = () =>
    genresContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });

  const getMovies = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchMovies(query, selectedGenre);
      setMovies(data.results);
      if (!query && data.results.length > 0) {
        const index = new Date().getHours() % data.results.length;
        setHeroMovie(data.results[index]);
      } else {
        setHeroMovie(null);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data.genres));
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, [query, selectedGenre]);

  return (
    <div className="bg-bg-dark min-h-screen text-white">
      {heroMovie && <HeroSection movie={heroMovie} />}
      <SearchBar query={query} setQuery={setQuery} onSearch={getMovies} />
      <GenreScroller
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genresContainerRef={genresContainerRef}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      <MoviesGrid movies={movies} loading={loading} error={error} />
    </div>
  );
};

export default Home;
