"use client";

import { useEffect } from "react";

/**
 * Fixes the legacy bug where mega-menu panels are hard-pinned to `top: 64px`
 * (the navbar height) but the navbar actually sits below the ~33px topbar when
 * the page is scrolled to the top — so the panel's top edge tucked under the
 * navbar. This aligns every `.mega-panel` to the navbar's real bottom edge,
 * recomputing on open, scroll, and resize. Mounted globally so it covers the
 * homepage and the (self-contained) topic pages alike.
 */
// Gap (px) left between the panel's bottom edge and the viewport bottom, so the
// dropdown floats as a card instead of stretching to the bottom (AWS-style).
// A larger gap = a slightly shorter dropdown.
const BOTTOM_GAP = 64;

export default function MegaPanelAligner() {
  useEffect(() => {
    const align = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      const top = Math.max(0, Math.round(nav.getBoundingClientRect().bottom));
      document
        .querySelectorAll<HTMLElement>(".mega-panel")
        .forEach((p) => {
          p.style.top = `${top}px`;
          // Leave a gap at the bottom; content scrolls inside the panel.
          p.style.maxHeight = `calc(100vh - ${top + BOTTOM_GAP}px)`;
          // Floating-card look: rounded bottom corners (top meets the navbar).
          p.style.borderRadius = "0 0 14px 14px";
        });
    };

    align();

    // Re-align whenever a panel's class changes (open/close). Observe `class`
    // only — observing `style` would loop since align() writes inline styles.
    const panels = document.querySelectorAll(".mega-panel");
    const observer = new MutationObserver(() => align());
    panels.forEach((p) =>
      observer.observe(p, { attributes: true, attributeFilter: ["class"] })
    );

    window.addEventListener("scroll", align, { passive: true });
    window.addEventListener("resize", align);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", align);
      window.removeEventListener("resize", align);
    };
  }, []);

  return null;
}
