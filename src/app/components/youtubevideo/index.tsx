export default function YouTubeVideo() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "135%",
        overflow: "hidden",
        width: "100%",
        borderRadius: "24px",
        border: "1px solid var(--border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="https://www.youtube.com/embed/IlSr-1xcKvs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
