"use client";

import { useEffect, useState } from "react";

export interface SubNavLink {
  label: string;
  href: string;
}

/**
 * Contextual sub-navbar shown below the main site chrome on industry (and
 * similar) pages. A single rounded card holds the page title at the start and
 * its in-page section links right after it. The link for the section currently
 * in view gets an underline indicator (scroll-spy).
 *
 * NOTE: the inner links container is a <div role="navigation"> (not a <nav>)
 * on purpose — the main navbar is styled via a bare `nav {}` element selector,
 * so a <nav> here would inherit its 64px height / sticky / white-bg styling.
 * Using a div with the dedicated `sub-nav-*` classes keeps the two fully
 * independent.
 */
export default function IndustrySubNav({
  name,
  links,
}: {
  name: string;
  links: SubNavLink[];
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links
      .map((l) => l.href)
      .filter((h) => h.startsWith("#"))
      .map((h) => h.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Highlight the top-most section that has scrolled under the sub-nav.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -62% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  return (
    <div className="sub-nav">
      <div className="sub-nav-card">
        <span className="sub-nav-title">{name}</span>
        <div
          className="sub-nav-links"
          role="navigation"
          aria-label={`${name} sections`}
        >
          {links.map((l) => (
            <a
              key={l.label + l.href}
              href={l.href}
              className={active && l.href === `#${active}` ? "active" : ""}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
