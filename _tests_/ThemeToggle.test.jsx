import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ThemeToggle from "../components/ThemeToggle";
import themeReducer from "../store/themeSlice";

function renderThemeToggle() {
  const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    ),
  };
}

describe("ThemeToggle", () => {
  test("renders Light Mode in dark mode", () => {
    renderThemeToggle();

    expect(
      screen.getByRole("button", { name: /Light/i })
    ).toBeInTheDocument();
  });

  test("changes to Dark Mode when clicked", async () => {
    const user = userEvent.setup();

    renderThemeToggle();

    const button = screen.getByRole("button", {
      name: /Light/i,
    });

    await user.click(button);

    expect(
      screen.getByRole("button", { name: /Dark/i })
    ).toBeInTheDocument();
  });
});