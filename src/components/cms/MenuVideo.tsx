"use client";

import { useEffect, useRef } from "react";

/**
 * The menu-builder demo video, played inside a BrowserMock. Autoplays muted and
 * loops; under prefers-reduced-motion it pauses and shows controls instead.
 */
export default function MenuVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.autoplay = false;
      v.loop = false;
      v.controls = true;
      v.pause();
    } else {
      v.play().catch(() => {
        /* autoplay may be blocked; ignore */
      });
    }
  }, []);

  return (
    <video
      ref={ref}
      className="cms-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src="/cms/menu-builder.webm" type="video/webm" />
      <source src="/cms/menu-builder.mp4" type="video/mp4" />
    </video>
  );
}
