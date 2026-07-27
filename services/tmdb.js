const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  return response.json();
}

export async function searchMovies(query, page = 1) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export async function getMovie(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  return response.json();
}

export async function getMovieVideos(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  return res.json();
}