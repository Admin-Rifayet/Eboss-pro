"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated visitor-analytics highlight used on both CMS marketing pages.
 * Shows four live-style metrics — Today, Yesterday, This month, This year —
 * with a count-up animation that fires when the block scrolls into view.
 *
 * `variant="light"` matches the original (white) page; `variant="dark"` matches
 * the cinematic Demo 1 page. Markup is identical; only the className root
 * differs so each page's stylesheet can theme it.
 */
const METRICS = [
  { key: "today", label: "Today", value: 1248, tail: "" },
  { key: "yesterday", label: "Yesterday", value: 2693, tail: "" },
  { key: "month", label: "This month", value: 58420, tail: "" },
  { key: "year", label: "This year", value: 712860, tail: "" },
] as const;

function format(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export default function VisitorCounter({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vals, setVals] = useState<number[]>(METRICS.map(() => 0));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVals(METRICS.map((m) => m.value));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          const duration = 1600;
          let raf = 0;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            // easeOutExpo for a premium settle
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setVals(METRICS.map((m) => m.value * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          obs.disconnect();
          return () => cancelAnimationFrame(raf);
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`vc vc-${variant}`} ref={ref}>
      <div className="vc-head">
        <span className="vc-live">
          <span className="vc-dot" /> Live
        </span>
        <span className="vc-title">Visitor analytics</span>
      </div>
      <div className="vc-grid">
        {METRICS.map((m, i) => (
          <div className="vc-cell" key={m.key}>
            <div className="vc-num">{format(vals[i])}</div>
            <div className="vc-lbl">{m.label}</div>
          </div>
        ))}
      </div>
      <p className="vc-foot">
        Real traffic, broken down by day, month and year — built into the
        storefront and surfaced right in the admin studio.
      </p>
    </div>
  );
}
