"use client";

import { useEffect } from "react";

/**
 * Generic scroll-reveal for legacy content pages (topics/*) whose markup is
 * injected verbatim and uses page-specific class names. Rather than target
 * known classes, it walks every content <section> and reveals its direct child
 * blocks with a stagger; blocks that look like a grid have their individual
 * items cascade instead. Reuses the `.ind-reveal` / `.ind-reveal-scale` CSS.
 * Renders nothing.
 */
const GRID_RE =
  /grid|tiles|flow|mosaic|usecases|process|service|ledger|timeline|chip-row|small-stack|orb-list|mini|stack|cards|row/i;

export default function ContentReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Content sections (skip the above-the-fold hero).
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        'section, .section, [class*="-section"], .finance-strip'
      )
    ).filter((s) => !/hero/i.test(s.className));

    sections.forEach((sec) => {
      let order = 0;
      const tag = (el: HTMLElement, scale: boolean) => {
        el.classList.add(scale ? "ind-reveal-scale" : "ind-reveal");
        el.style.setProperty("--d", `${order * 80}ms`);
        order++;
      };
      Array.from(sec.children).forEach((child) => {
        const block = child as HTMLElement;
        const kids = Array.from(block.children) as HTMLElement[];
        const looksLikeGrid =
          kids.length >= 2 && GRID_RE.test(block.className);
        if (looksLikeGrid) {
          kids.forEach((k) => tag(k, true));
        } else {
          tag(block, false);
        }
      });
    });

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".ind-reveal, .ind-reveal-scale")
    );

    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
