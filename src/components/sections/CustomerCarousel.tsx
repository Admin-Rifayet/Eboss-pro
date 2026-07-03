"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { carouselSlides } from "@/data/home";

/**
 * Center/peek carousel with seamless infinite loop (AWS-style). The track is
 * the real slides plus a clone of the last slide prepended and the first slide
 * appended, so there is ALWAYS a card peeking on both edges — including on the
 * first and last real slides. When a clone scrolls into the center we snap
 * (without animation) back to the matching real slide.
 */
export default function CustomerCarousel() {
  const slides = carouselSlides;
  const total = slides.length;
  const ext = [slides[total - 1], ...slides, slides[0]]; // [cloneLast, ...real, cloneFirst]

  const [pos, setPos] = useState(1); // track index in `ext` (1 = first real slide)
  const [anim, setAnim] = useState(true);
  const paused = useRef(false);
  const startX = useRef(0);

  const go = useCallback((delta: number) => {
    setAnim(true);
    setPos((p) => p + delta);
  }, []);

  // Autoplay (paused on hover).
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) go(1);
    }, 6000);
    return () => clearInterval(t);
  }, [go]);

  // After landing on a clone, snap (no animation) to the matching real slide.
  const onEnd = () => {
    if (pos === total + 1) {
      setAnim(false);
      setPos(1);
    } else if (pos === 0) {
      setAnim(false);
      setPos(total);
    }
  };

  // Re-enable animation on the frame after a no-anim snap.
  useEffect(() => {
    if (anim) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnim(true))
    );
    return () => cancelAnimationFrame(id);
  }, [anim]);

  const logical = ((pos - 1) % total + total) % total; // 0-based real index

  return (
    <section className="cs-section">
      <div className="container">
        <div className="cs-header">
          <div>
            <h2 className="cs-title">Customers Building the Future</h2>
            <p className="cs-sub">
              From growing SMEs to large enterprises — see what they&apos;ve
              achieved on EBOSSPro.
            </p>
          </div>
          <a className="cs-more" href="#">
            View more stories
          </a>
        </div>

        <div
          className="cs-viewport"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <div
            className={`cs-track${anim ? "" : " cs-instant"}`}
            style={{
              transform: `translateX(calc(50vw - (var(--cw) / 2) - ${pos} * (var(--cw) + var(--gap))))`,
              transition: anim
                ? "transform .65s cubic-bezier(.4,0,.2,1)"
                : "none",
            }}
            onTransitionEnd={(e) => {
              // Only react to the track's own slide; ignore bubbled child
              // transitions (opacity/scale on slides) that would otherwise
              // snap the loop early and cause a visible jump.
              if (e.target !== e.currentTarget || e.propertyName !== "transform")
                return;
              onEnd();
            }}
          >
            {ext.map((s, i) => (
              <div
                key={i}
                className={`cs-slide${i === pos ? " active" : ""}`}
                onClick={() => i !== pos && go(i - pos)}
              >
                <div className="cs-card">
                  <div
                    className="cs-card-bg"
                    style={{ backgroundImage: `url('${s.photo}')` }}
                  />
                  <span className="cs-tag">{s.tag}</span>
                  <div className="cs-card-foot">
                    <div className="cs-logo">
                      EBOSS<span>Pro</span>
                    </div>
                    <h3>{s.headline}</h3>
                    <a className="cs-story" href="#">
                      View the story →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-controls">
          <div className="cs-pill">
            <button className="cs-arrow" onClick={() => go(-1)} aria-label="Previous">
              ‹
            </button>
            <span className="cs-counter">
              {logical + 1} / {total}
            </span>
            <button className="cs-arrow" onClick={() => go(1)} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
