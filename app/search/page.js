import { searchMovies } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard";

export default async function SearchPage({
  searchParams,
}) {
  const { q = "" } = await searchParams;

  const data = q
    ? await searchMovies(q)
    : { results: [] };

  return (
    <main className="home">

      <h1 className="results-title">
        Search Results
      </h1>

      {q && (
        <p
          style={{
            marginBottom: "30px",
            color: "#9ca3af",
          }}
        >
          Showing results for <b>{q}</b>
        </p>
      )}

      {data.results.length === 0 ? (
        <div className="no-results">
          <h2>🎬 No movies found</h2>

          <p>
            Try searching with another movie title.
          </p>
        </div>
      ) : (
        <div className="movie-grid">
          {data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}

    </main>
  );
}