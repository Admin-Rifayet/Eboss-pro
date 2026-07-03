"use client";

import { useEffect, useRef } from "react";
import BrowserMock from "./BrowserMock";

const THEMES = [
  { n: 1, desc: "Marketplace-ready" },
  { n: 2, desc: "Clean corporate" },
  { n: 3, desc: "Bold editorial" },
  { n: 4, desc: "Minimal NGO" },
  { n: 5, desc: "Community / mosque" },
  { n: 6, desc: "School & education" },
];

export default function ThemeGallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let paused = false;
    const enter = () => (paused = true);
    const leave = () => (paused = false);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    const timer = setInterval(() => {
      if (paused) return;
      const card = el.querySelector<HTMLElement>(".cms-theme");
      const step = card ? card.clientWidth + 22 : 420;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 12) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3800);
    return () => {
      clearInterval(timer);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="cms-gallery-track" ref={ref}>
      {THEMES.map((t) => (
        <div className="cms-theme" key={t.n}>
          <BrowserMock
            src={`/cms/demo${t.n}.png`}
            alt={`Demo ${t.n} theme`}
            label={`/cms/demo${t.n}.png`}
          />
          <div className="cms-theme-name">
            Demo {t.n} <span>— {t.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
