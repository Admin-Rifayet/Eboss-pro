"use client";

import Image from "next/image";
import Link from "next/link";
import { navButtons } from "@/data/home";
import NavSearch from "@/components/layout/NavSearch";

export default function Navbar({
  flush = false,
  dark = false,
}: {
  flush?: boolean;
  /** Glassy dark theme that matches the product (cmx) pages. */
  dark?: boolean;
}) {
  const className =
    [flush ? "nav-flush" : "", dark ? "nav-dark" : ""]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <nav className={className}>
      <a className="nav-logo-block" href="/">
        <Image
          className="nav-logo-img"
          src="/images/e.png"
          alt="E Logo"
          width={40}
          height={40}
        />
        <div className="nav-logo-text">
          <div className="nav-logo-name">
            EBOSS<span>Pro</span>
          </div>
          <div className="nav-logo-sub">Built Inside. Powered Beyond</div>
        </div>
      </a>

      <div className="nav-links">
        {navButtons.map((label) => {
          const panelId = `${label.toLowerCase()}-panel`;
          return (
            <button
              key={label}
              className="nav-btn"
              data-menu={label.toLowerCase()}
              type="button"
              onClick={(e) => window.toggleMenu?.(e.currentTarget, panelId)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <NavSearch />

      <div className="nav-actions">
        <Link className="btn-nav" href="/signin">
          Sign In
        </Link>
        <Link className="btn-nav primary" href="/signup">
          Create Account
        </Link>
      </div>
    </nav>
  );
}
