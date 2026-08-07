"use client";

import { useDispatch, useSelector } from "react-redux";
import { setGenre, setRating } from "../store/filterSlice";

export default function FilterSidebar() {
  const dispatch = useDispatch();

  const { genre, rating } = useSelector(
    (state) => state.filters
  );

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>

      <label>Genre</label>

      <select
        value={genre}
        onChange={(e) =>
          dispatch(setGenre(e.target.value))
        }
      >
        <option>All</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Adventure</option>
      </select>

      <label>Minimum Rating</label>

      <input
        type="range"
        min="0"
        max="10"
        value={rating}
        onChange={(e) =>
          dispatch(setRating(Number(e.target.value)))
        }
      />

      <p>{rating} ⭐</p>
    </aside>
  );
}