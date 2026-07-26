import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="movie-card">

      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p>
          {movie.release_date?.slice(0,4)}
        </p>
      </div>

    </Link>
  );
}