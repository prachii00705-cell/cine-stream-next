import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("SearchBar", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  test("renders search input and button", () => {
    render(<SearchBar />);

    expect(
      screen.getByPlaceholderText("Search movies...")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Search" })
    ).toBeInTheDocument();
  });

  test("searches for a movie when submitted", async () => {
    const user = userEvent.setup();

    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search movies...");

    await user.type(input, "Inception");

    await user.click(
      screen.getByRole("button", { name: "Search" })
    );

    expect(mockPush).toHaveBeenCalledWith(
      "/search?q=Inception"
    );
  });
});