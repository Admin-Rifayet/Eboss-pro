"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#080f1e",
        color: "#e2eaf5",
        fontFamily: '"IBM Plex Sans", sans-serif',
        textAlign: "center",
        padding: 24,
        gap: 16,
      }}
    >
      <h2 style={{ fontSize: 26, fontWeight: 700 }}>Something went wrong</h2>
      <p style={{ color: "#7a93b5", maxWidth: 440 }}>
        We hit an unexpected error while loading this page. Please try again.
      </p>
      <button
        onClick={reset}
        style={{
          background: "#7c3aed",
          color: "#fff",
          border: "none",
          padding: "10px 22px",
          borderRadius: 8,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
