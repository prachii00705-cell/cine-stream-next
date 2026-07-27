export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Cine Stream. Built with Next.js & TMDB API.</p>

      <p>
        Movie data provided by{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDB
        </a>
      </p>
    </footer>
  );
}