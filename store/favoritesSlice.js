import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    loadFavorites(state, action) {
      state.movies = action.payload;
    },

    addFavorite(state, action) {
      state.movies.push(action.payload);
    },

    removeFavorite(state, action) {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  loadFavorites,
  addFavorite,
  removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;