import { render, screen } from "@testing-library/react";
import MovieCard from "../components/MovieCard";

const movie = {
  id: 1,
  title: "Inception",
  poster_path: "/test-poster.jpg",
  release_date: "2010-07-16",
  vote_average: 8.8,
};

describe("MovieCard", () => {
  test("renders movie information correctly", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText(/2010/)).toBeInTheDocument();
    expect(screen.getByText(/8.8/)).toBeInTheDocument();
  });
});