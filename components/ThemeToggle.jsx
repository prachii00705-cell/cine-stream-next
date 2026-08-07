"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  return (
    <button
      className="theme-btn"
      onClick={() => dispatch(toggleTheme())}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}