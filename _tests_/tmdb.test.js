import { getPopularMovies } from "../services/tmdb";

global.fetch = jest.fn();

describe("TMDB API", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetches popular movies successfully", async () => {
    const mockMovies = {
      results: [
        {
          id: 1,
          title: "Inception",
          vote_average: 8.8,
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockMovies,
    });

    const result = await getPopularMovies();

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(mockMovies);
  });
});