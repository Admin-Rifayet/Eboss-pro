export default function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#080f1e",
        color: "#7a93b5",
        fontFamily: '"IBM Plex Sans", sans-serif',
        gap: 14,
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          border: "3px solid rgba(124,58,237,.35)",
          borderTopColor: "#7c3aed",
          borderRadius: "50%",
          display: "inline-block",
          animation: "ebspin 0.8s linear infinite",
        }}
      />
      <span>Loading EBOSSPro…</span>
      <style>{`@keyframes ebspin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
