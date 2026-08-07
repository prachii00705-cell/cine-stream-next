"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return children;
}