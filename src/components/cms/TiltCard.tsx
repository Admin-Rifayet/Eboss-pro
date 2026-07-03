"use client";

import { useRef } from "react";
import BrowserMock from "./BrowserMock";

export default function TiltCard({
  tagline,
  title,
  wins,
  src,
  alt,
  label,
}: {
  tagline: string;
  title: string;
  wins: string[];
  src: string;
  alt: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-6px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      className="tilt-card cms-reveal-scale"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <div className="tilt-tagline">{tagline}</div>
      <h3>{title}</h3>
      <ul className="tilt-wins">
        {wins.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
      <div className="tilt-shot">
        <BrowserMock src={src} alt={alt} label={label} />
      </div>
    </div>
  );
}
