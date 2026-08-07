"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!query.trim()) return;

      router.push(
        `/search?q=${encodeURIComponent(query)}`
      );
    },
    [query, router]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form"
    >
      <input
        className="search-bar"
        placeholder="Search movies..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button
        className="watch-btn"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}