"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AWS-style nav search: a compact "🔍 Search" trigger in the navbar that
 * expands into a full-width search bar below the nav (pill input with a blue
 * focus ring, a "Filter: All" pill, and a close button). Mirrors the search
 * UX on aws.amazon.com.
 */
function SearchIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function NavSearch() {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(64);
  const inputRef = useRef<HTMLInputElement>(null);

  // Position the expanded bar flush below the navbar's real bottom edge,
  // tracking scroll/resize while open.
  useEffect(() => {
    if (!open) return;
    const place = () => {
      const nav = document.querySelector("nav");
      if (nav) setTop(Math.max(0, Math.round(nav.getBoundingClientRect().bottom)));
    };
    place();
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        className="nav-search-trigger"
        type="button"
        aria-label="Search"
        aria-expanded={open}
        onClick={() => {
          // Close any open mega-menu panel first, matching AWS behavior.
          window.closeAll?.();
          setOpen((o) => !o);
        }}
      >
        <SearchIcon />
        <span>Search</span>
      </button>

      {open && (
        <>
          <div
            className="nav-search-backdrop"
            onClick={() => setOpen(false)}
            style={{ top }}
          />
          <div className="nav-search-bar" style={{ top }}>
            <div className="nav-search-inner">
              <div className="nsb-field">
                <SearchIcon size={20} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="I'm looking for…"
                  aria-label="Search EBOSSPro"
                />
              </div>
              <button className="nsb-filter" type="button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                  <line x1="10" y1="18" x2="14" y2="18" />
                </svg>
                Filter: All
              </button>
              <button
                className="nsb-close"
                type="button"
                aria-label="Close search"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
