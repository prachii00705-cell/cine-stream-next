import Image from "next/image";
import {
  getMovie,
  getMovieVideos,
} from "../../../services/tmdb";
import FavoriteButton from "../../../components/FavoriteButton";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const movie = await getMovie(id);

  return {
    title: `${movie.title} | Cine Stream`,
    description: movie.overview,
  };
}

export default async function MovieDetails({ params }) {
  const { id } = await params;

  const movie = await getMovie(id);

  const videos = await getMovieVideos(id);

  const trailer = videos.results.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  return (
    <main className="movie-details">

      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={350}
        height={520}
      />

      <div className="details">

        <h1>{movie.title}</h1>

        <h2>⭐ {movie.vote_average.toFixed(1)}</h2>

        <p>{movie.overview}</p>

        <p>
          <strong>Release:</strong> {movie.release_date}
        </p>

        <p>
          <strong>Runtime:</strong> {movie.runtime} mins
        </p>

        <FavoriteButton movie={movie} />

        {trailer && (
          <a
            href={`https://www.youtube.com/watch?v=${trailer.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-btn"
          >
            ▶ Watch Trailer
          </a>
        )}

      </div>

    </main>
  );
}