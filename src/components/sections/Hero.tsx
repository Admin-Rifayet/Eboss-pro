"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { heroSlides } from "@/data/home";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const total = heroSlides.length;

  const go = useCallback(
    (n: number) => setCurrent((n + total) % total),
    [total]
  );

  // Auto-advance every 6s (matches legacy), resets when current changes.
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [current, total]);

  return (
    <section className="hero hero-slider" id="heroSlider">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? " active" : ""}`}
          style={{ background: slide.bgGradient }}
        >
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
              opacity: slide.bgOpacity,
            }}
          />
          <div className="hero-content">
            <div className="hero-eyebrow">{slide.eyebrow}</div>
            <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
            <p>{slide.body}</p>
            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() =>
                  slide.primaryHref && router.push(slide.primaryHref)
                }
              >
                {slide.primaryLabel}
              </button>
              <button className="btn-outline">{slide.outlineLabel}</button>
            </div>
          </div>
          <div className="hero-card">
            <div
              className="hero-card-photo"
              style={{ backgroundImage: `url('${slide.cardPhoto}')` }}
            >
              <span className="hcp-badge">{slide.cardBadge}</span>
            </div>
            <div className="hero-card-body">
              <div
                className="card-date"
                style={slide.cardDateColor ? { color: slide.cardDateColor } : undefined}
              >
                {slide.cardDate}
              </div>
              <h3>{slide.cardTitle}</h3>
              <p>{slide.cardBody}</p>
              <a className="cta-link" href={slide.cardLinkHref}>
                {slide.cardLink}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-slider-controls">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hsc-dot${i === current ? " active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <button
        className="hsc-arrow hsc-prev"
        onClick={() => go(current - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hsc-arrow hsc-next"
        onClick={() => go(current + 1)}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
