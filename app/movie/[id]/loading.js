export default function LoadingMovie() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>🎬 Loading Movie...</h1>

      <p>Fetching movie details...</p>
    </main>
  );
}