import { getPopularMovies } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

export default async function Home() {
  const data = await getPopularMovies();

  return (
    <main>

      <section className="hero">
        <div className="hero-overlay">
          <h1>Unlimited Movies.</h1>

          <h2>Discover • Search • Favorite</h2>

          <p>
            Explore thousands of movies powered by TMDB.
            Search instantly, save your favorites,
            and enjoy a premium movie browsing experience.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <SearchBar />

      {/* Movies */}
      <div className="movie-grid">
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </main>
  );
}