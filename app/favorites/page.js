"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites } from "../../store/favoritesSlice";
import MovieCard from "../../components/MovieCard";

export default function FavoritesPage() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.movies
  );

  useEffect(() => {
    const movies =
      JSON.parse(localStorage.getItem("favorites")) || [];

    dispatch(loadFavorites(movies));
  }, [dispatch]);

  return (
    <main>
      <h1 className="results-title">❤️ My Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </main>
  );
}