"use client";

export default function MovieError({
  error,
  reset,
}) {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>🎬 Failed to load movie.</h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          background: "#ef4444",
          color: "white",
          fontSize: "16px",
        }}
      >
        Retry
      </button>
    </main>
  );
}