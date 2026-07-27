import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>404</h1>

        <h2>Movie Not Found</h2>

        <br />

        <Link
          href="/"
          className="watch-btn"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}