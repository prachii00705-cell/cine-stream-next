"use client";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const genres = {
  28: "Action",
  35: "Comedy",
  18: "Drama",
  12: "Adventure",
};

export default function MovieGrid({ movies }) {
  const { genre, rating } = useSelector(
    (state) => state.filters
  );

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const ratingMatch = movie.vote_average >= rating;

      const genreMatch =
        genre === "All" ||
        movie.genre_ids.some(
          (id) => genres[id] === genre
        );

      return ratingMatch && genreMatch;
    });
  }, [movies, genre, rating]);

  return (
    <div className="movie-grid">
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}