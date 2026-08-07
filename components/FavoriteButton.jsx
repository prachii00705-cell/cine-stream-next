"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  loadFavorites,
} from "../store/favoritesSlice";

export default function FavoriteButton({ movie }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.movies
  );

  const favorite = favorites.some(
    (m) => m.id === movie.id
  );

  useEffect(() => {
    const movies =
      JSON.parse(localStorage.getItem("favorites")) || [];

    dispatch(loadFavorites(movies));
  }, [dispatch]);

  function toggleFavorite() {
    let movies = [...favorites];

    if (favorite) {
      movies = movies.filter((m) => m.id !== movie.id);

      dispatch(removeFavorite(movie.id));
    } else {
      movies.push(movie);

      dispatch(addFavorite(movie));
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(movies)
    );
  }

  return (
    <button
      className="watch-btn"
      onClick={toggleFavorite}
      style={{ marginTop: "20px" }}
    >
      {favorite
        ? "❤️ Remove Favorite"
        : "🤍 Add Favorite"}
    </button>
  );
}