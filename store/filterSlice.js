import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: "All",
  rating: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setRating(state, action) {
      state.rating = action.payload;
    },
  },
});

export const {
  setGenre,
  setRating,
} = filterSlice.actions;

export default filterSlice.reducer;