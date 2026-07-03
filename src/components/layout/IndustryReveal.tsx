"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal engine for the legacy industry pages, mirroring the CMS page's
 * `.cms-reveal` behaviour. The industry markup is injected verbatim (LegacyPage)
 * so we can't add reveal classes in JSX — instead, after mount, we tag each
 * content section's heading group (kicker/title/lead) and its cards/pills with
 * the `ind-reveal` / `ind-reveal-scale` classes (cards get a staggered `--d`),
 * then add `.in` as they scroll into view. Renders nothing.
 */
export default function IndustryReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Tag legacy content blocks for reveal. The hero is above the fold, so it
    // is left alone; everything from the first content section down animates in.
    document.querySelectorAll<HTMLElement>(".section").forEach((sec) => {
      sec
        .querySelectorAll<HTMLElement>(".kicker, .title, .lead")
        .forEach((el) => el.classList.add("ind-reveal"));
      sec
        .querySelectorAll<HTMLElement>(".card, .pill")
        .forEach((el, i) => {
          el.classList.add("ind-reveal-scale");
          el.style.setProperty("--d", `${i * 80}ms`);
        });
      // The closing CTA panel rises in as a whole.
      sec.querySelectorAll<HTMLElement>(".cta").forEach((el) => {
        el.classList.add("ind-reveal-scale");
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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
