"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import ThemeProvider from "./ThemeProvider";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
}