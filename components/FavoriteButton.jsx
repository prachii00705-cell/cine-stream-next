"use client";

import { useState } from "react";

export default function FavoriteButton({ movie }) {

  const [favorite, setFavorite] = useState(() => {
    if (typeof window === "undefined") return false;

    const movies =
      JSON.parse(localStorage.getItem("favorites")) || [];

    return movies.some((m) => m.id === movie.id);
  });

  function toggleFavorite() {
    let movies =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      movies = movies.filter((m) => m.id !== movie.id);
    } else {
      movies.push(movie);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(movies)
    );

    setFavorite(!favorite);
  }

  return (
    <button
      className="watch-btn"
      onClick={toggleFavorite}
      style={{ marginTop: "20px" }}
    >
      {favorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
    </button>
  );
}