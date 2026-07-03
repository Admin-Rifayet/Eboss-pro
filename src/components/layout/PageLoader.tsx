"use client";

import { useEffect, useState } from "react";

/**
 * Page-load fade-in overlay. The fade-out and removal are driven by React state
 * (not a manual node.remove()), so React stays the sole owner of the node —
 * avoiding "removeChild: node is not a child" errors on navigation/HMR.
 */
export default function PageLoader() {
  const [phase, setPhase] = useState<"show" | "fading" | "gone">("show");

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    const dismiss = () => {
      setPhase("fading");
      fadeTimer = setTimeout(() => setPhase("gone"), 600);
    };
    const run = () =>
      requestAnimationFrame(() => requestAnimationFrame(dismiss));

    if (document.readyState === "complete") {
      run();
      return () => clearTimeout(fadeTimer);
    }
    window.addEventListener("load", run);
    return () => {
      window.removeEventListener("load", run);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (phase === "gone") return null;
  return <div id="page-loader" className={phase === "fading" ? "done" : ""} />;
}
