"use client";

import { useEffect, useRef } from "react";

export interface LegacyPageData {
  css: string;
  html: string;
  script: string;
}

/**
 * Renders a self-contained legacy page (industries/*, topics/*) faithfully.
 *
 * These pages ship their own scoped CSS, markup, and vanilla JS that differs
 * from the homepage chrome, so they are rendered verbatim rather than
 * re-componentized: the CSS is injected as a <style> tag, the body markup via
 * dangerouslySetInnerHTML, and the original inline script is executed on mount
 * (defining its globals on window and running its IIFEs) so all interactions
 * — nav, sliders, etc. — behave exactly as the original.
 */
export default function LegacyPage({ data }: { data: LegacyPageData }) {
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current || !data.script) return;
    ranRef.current = true;
    // Inject as a real <script> element so the legacy code runs in GLOBAL
    // scope. This is essential: the legacy markup uses inline handlers like
    // onclick="toggleMenu(this,'products-panel')", which resolve against
    // window — so the script's top-level `function toggleMenu(){}` must become
    // a global. (new Function()/eval-in-closure would scope them locally and
    // the mega-menu would silently not open.)
    const el = document.createElement("script");
    el.textContent = data.script;
    document.body.appendChild(el);
    return () => {
      el.remove();
    };
  }, [data.script]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: data.css }} />
      <div
        style={{ display: "contents" }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </>
  );
}
