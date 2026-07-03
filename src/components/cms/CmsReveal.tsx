"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll engine for the CMS page. Observes every `.cms-reveal`
 * element and adds `.in` when it enters the viewport. Per-element stagger is
 * encoded via an inline `--d` delay in the markup. Renders nothing.
 */
export default function CmsReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".cms-reveal, .cms-reveal-scale")
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    // Replay every time an element enters the viewport — scrolling DOWN reveals
    // it, scrolling back UP (so it leaves) resets it, and it animates again on
    // the next entry. (No unobserve → the reveal is not one-shot.)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("in", e.isIntersecting);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
