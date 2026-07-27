"use client";

export default function Error({
  error,
  reset,
}) {
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
        <h1>🎬 Something went wrong</h1>

        <p>{error.message}</p>

        <button
          className="watch-btn"
          onClick={reset}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}