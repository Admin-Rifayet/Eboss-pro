"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal engine, ported 1:1 from the legacy index2.php inline script.
 *
 * Several homepage elements have a base `opacity: 0` in the stylesheet
 * (.section-title, .section-sub, .region-pill, .carousel-wrap) and are only
 * made visible when this observer adds `.visible` / `.rp-visible`. Without it
 * those elements stayed permanently invisible (e.g. the "Serving All of
 * Malaysia" region pills). Gallery cards and stats also get a staggered reveal.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Tag gallery cards for staggered reveal.
    document.querySelectorAll<HTMLElement>(".gallery-grid").forEach((grid) => {
      grid.classList.add("sr-stagger");
      grid.querySelectorAll<HTMLElement>(".gallery-card").forEach((card, i) => {
        card.classList.add("sr");
        card.style.transitionDelay = `${i * 0.15}s`;
      });
    });

    // Tag stats grid items.
    const statsGrid = document.querySelector(".stats-grid");
    if (statsGrid) {
      statsGrid.classList.add("sr-stagger");
      statsGrid
        .querySelectorAll(".stat-num, .stat-label")
        .forEach((el) => el.classList.add("sr"));
    }

    // Stagger region pills.
    document
      .querySelectorAll<HTMLElement>(".region-pill")
      .forEach((pill, i) => {
        pill.style.transitionDelay = `${i * 0.09}s`;
      });

    // Additional blocks that should fade-up on scroll (AWS-style).
    [".ask-ai-card", ".cs-header", ".infra-head"].forEach((sel) =>
      document.querySelectorAll(sel).forEach((el) => el.classList.add("sr"))
    );

    // "Serving All of Malaysia" globe section.
    // Tabs + presence heading fade/slide in, the office cards stagger in one
    // by one, and the globe "rounds" into view with a 3-D rotateY sweep.
    document
      .querySelectorAll(".globe-tabs")
      .forEach((el) => el.classList.add("sr"));
    document
      .querySelectorAll(".globe-panel-head")
      .forEach((el) => el.classList.add("sr", "sr-left"));
    document.querySelectorAll<HTMLElement>(".globe-office-list").forEach((list) => {
      list
        .querySelectorAll<HTMLElement>(".globe-office")
        .forEach((card, i) => {
          card.classList.add("sr", "sr-left");
          card.style.transitionDelay = `${0.12 + i * 0.12}s`;
        });
    });
    document
      .querySelectorAll(".globe-wrap")
      .forEach((el) => el.classList.add("sr", "globe-3d"));

    // Footer columns reveal with a stagger.
    document
      .querySelectorAll<HTMLElement>(".footer-grid .footer-col")
      .forEach((el, i) => {
        el.classList.add("sr");
        el.style.transitionDelay = `${i * 0.07}s`;
      });

    const allTargets: Element[] = [
      ...document.querySelectorAll(".sr"),
      ...document.querySelectorAll(".section-title, .section-sub"),
      ...document.querySelectorAll(".region-pill"),
      ...Array.from(document.querySelectorAll(".carousel-wrap")),
    ];

    // Honour reduced-motion: reveal everything at once, no animation.
    if (reduce) {
      allTargets.forEach((el) => {
        el.classList.add("visible", "rp-visible", "gc-show");
        (el as HTMLElement).style.transitionDelay = "";
      });
      return;
    }

    // Reveal an element (used on enter). Replays every time, so re-add the
    // one-shot stat flash with a reflow to restart its animation.
    const reveal = (el: HTMLElement) => {
      el.classList.add("visible");
      if (el.classList.contains("gallery-card")) el.classList.add("gc-show");
      if (el.classList.contains("region-pill")) el.classList.add("rp-visible");
      if (el.classList.contains("stat-num")) {
        el.classList.remove("flash");
        void el.offsetWidth; // force reflow → restart the flash animation
        el.classList.add("flash");
      }
    };

    // Reset an element to its hidden state (used on leave) so it animates
    // again the next time it scrolls into view — going up OR down.
    // Direction-aware: an element that leaves past the TOP hides upward (so it
    // reverses when you scroll back up), one that leaves past the BOTTOM hides
    // downward. Only the plain vertical reveals get flipped — the horizontal
    // (sr-left/right) and 3-D globe reveals keep their own direction.
    const hide = (el: HTMLElement, entry: IntersectionObserverEntry) => {
      el.classList.remove("visible", "gc-show", "rp-visible", "flash");
      const directional =
        el.classList.contains("sr-left") ||
        el.classList.contains("sr-right") ||
        el.classList.contains("sr-scale") ||
        el.classList.contains("globe-3d");
      if (directional) return;
      const rb = entry.rootBounds;
      const top = entry.boundingClientRect.top;
      const leftTop = rb ? top < rb.top : top < 0;
      el.classList.toggle("sr-up", leftTop);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) reveal(el);
          else hide(el, entry);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    allTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
