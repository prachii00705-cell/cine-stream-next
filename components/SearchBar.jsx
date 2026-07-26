"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!search.trim()) return;

    onSearch(search);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}