"use client";

import { useState } from "react";
import MovieCard from "../../components/MovieCard";

export default function FavoritesPage() {

  const [favorites] = useState(() => {
    if (typeof window === "undefined") return [];

    return JSON.parse(
      localStorage.getItem("favorites")
    ) || [];
  });

  return (
    <main className="home">
      <h1 className="results-title">
        ❤️ My Favorites
      </h1>

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