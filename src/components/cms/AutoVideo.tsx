"use client";

import { useEffect, useRef } from "react";

/**
 * Autoplaying, muted, looping video (webm + mp4) loaded from /cms/<base>.
 * Under prefers-reduced-motion it pauses and shows controls instead.
 */
export default function AutoVideo({
  base,
  className = "cms-video",
}: {
  base: string;
  className?: string;
}) {
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
    <video ref={ref} className={className} autoPlay muted loop playsInline preload="metadata">
      <source src={`/cms/${base}.webm`} type="video/webm" />
      <source src={`/cms/${base}.mp4`} type="video/mp4" />
    </video>
  );
}
