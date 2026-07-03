"use client";

import { useState } from "react";

/* ────────────────────────────────────────────────────────────
   Presence data (sourced from the Awfatech corporate profile).
   Each country has a globe marker + one or more office cards.
   Malaysia: 2 offices.  Indonesia: 1 office.
   ──────────────────────────────────────────────────────────── */
interface Office {
  tag: string;
  city: string;
  address: string;
  points: string[];
}

interface Country {
  id: string;
  label: string;
  flag: string;
  lat: number;
  lng: number;
  labelPos: "top" | "bottom";
  offices: Office[];
}

const countries: Country[] = [
  {
    id: "my",
    label: "Malaysia",
    flag: "🇲🇾",
    lat: 3.07,
    lng: 101.6,
    labelPos: "top",
    offices: [
      {
        tag: "Headquarters",
        city: "Subang Jaya, Selangor",
        address:
          "No. 5-1, Jalan USJ 1/1A, Regalia Business Center, 47600 Subang Jaya, Selangor",
        points: [
          "Primary operations, product & support",
          "Serving 1,000+ customers nationwide",
        ],
      },
      {
        tag: "Branch Office",
        city: "Ipoh, Perak",
        address:
          "No. 80A, Jalan Lang Indah 1/A, Pusat Perniagaan Lang Indah, 30010 Ipoh, Perak",
        points: [
          "Northern-region sales & delivery",
          "Local onboarding & customer support",
        ],
      },
    ],
  },
  {
    id: "id",
    label: "Indonesia",
    flag: "🇮🇩",
    lat: -6.2,
    lng: 106.85,
    labelPos: "bottom",
    offices: [
      {
        tag: "Regional Office",
        city: "Jakarta",
        address: "Jakarta, Indonesia",
        points: [
          "Regional development & operations",
          "Extending the platform across the region",
        ],
      },
    ],
  },
];

/* ── Orthographic globe maths (centred on South-East Asia) ── */
const DEG = Math.PI / 180;
const GLOBE = { size: 600, R: 248, cx: 300, cy: 300, lat0: -2, lng0: 105 };

function project(lat: number, lng: number) {
  const lat0 = GLOBE.lat0 * DEG;
  const lng0 = GLOBE.lng0 * DEG;
  const r = lat * DEG;
  const dl = lng * DEG - lng0;
  const cosc =
    Math.sin(lat0) * Math.sin(r) + Math.cos(lat0) * Math.cos(r) * Math.cos(dl);
  const x = Math.cos(r) * Math.sin(dl);
  const y =
    Math.cos(lat0) * Math.sin(r) - Math.sin(lat0) * Math.cos(r) * Math.cos(dl);
  return {
    x: GLOBE.cx + x * GLOBE.R,
    y: GLOBE.cy - y * GLOBE.R,
    front: cosc >= -0.02,
    depth: cosc,
  };
}

/* Round to a fixed precision so the SVG markup serialises identically on the
   server and the client (full-precision floats hydrate with a mismatch). */
const round = (n: number) => Math.round(n * 1000) / 1000;

/** Dotted sphere — front-hemisphere graticule points (computed once). */
const DOTS: { x: number; y: number; o: number; r: number }[] = (() => {
  const out: { x: number; y: number; o: number; r: number }[] = [];
  for (let lat = -84; lat <= 84; lat += 4.5) {
    const ring = Math.max(1, Math.round(96 * Math.cos(lat * DEG)));
    for (let i = 0; i < ring; i++) {
      const lng = (i / ring) * 360;
      const p = project(lat, lng);
      if (!p.front) continue;
      const d = Math.max(0, p.depth);
      out.push({
        x: round(p.x),
        y: round(p.y),
        o: round(0.18 + 0.62 * d), // brighter toward the lit centre
        r: round(1.1 + 1.5 * d), // larger toward the centre for depth
      });
    }
  }
  return out;
})();

export default function InfraSection() {
  const [activeId, setActiveId] = useState(countries[0].id);
  const active = countries.find((c) => c.id === activeId) ?? countries[0];

  return (
    <section className="infra-section">
      <div className="container">
        <div className="infra-head">
          <h2>Serving All of Malaysia</h2>
          <p>
            With two offices in Malaysia — headquartered in Subang Jaya,
            Selangor — and a regional office in Jakarta, EBOSSPro by Awfatech is
            built and operated locally, serving 1,000+ customers and over a
            million users right across Malaysia from one trusted platform.
          </p>
        </div>

        {/* Pill tab bar */}
        <div className="globe-tabs" role="tablist" aria-label="Our offices">
          {countries.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === activeId}
              className={`globe-tab${c.id === activeId ? " active" : ""}`}
              onClick={() => setActiveId(c.id)}
            >
              <span aria-hidden>{c.flag}</span> {c.label}
              <span className="globe-tab-count">{c.offices.length}</span>
            </button>
          ))}
        </div>

        <div className="globe-layout">
          {/* Left: presence panel with one card per office */}
          <div className="globe-panel">
            <div className="globe-panel-head">
              <span className="globe-card-badge">Our Presence</span>
              <h3>
                {active.flag} {active.label}
              </h3>
              <span className="globe-panel-count">
                {active.offices.length}{" "}
                {active.offices.length > 1 ? "offices" : "office"}
              </span>
            </div>

            <div className="globe-office-list">
              {active.offices.map((o, i) => (
                <div className="globe-office" key={o.city}>
                  <div className="globe-office-top">
                    <span className="globe-office-no">{i + 1}</span>
                    <div>
                      <span className="globe-card-tag">{o.tag}</span>
                      <div className="globe-office-city">{o.city}</div>
                    </div>
                  </div>
                  <p className="globe-card-address">{o.address}</p>
                  <ul className="globe-card-list">
                    {o.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: globe */}
          <div className="globe-stage">
            <div className="globe-wrap">
              <svg
                className="globe-svg"
                viewBox={`0 0 ${GLOBE.size} ${GLOBE.size}`}
                aria-hidden
              >
                <defs>
                  <radialGradient id="globeBody" cx="36%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#f3effe" />
                    <stop offset="38%" stopColor="#b9a9f7" />
                    <stop offset="78%" stopColor="#7b6fe0" />
                    <stop offset="100%" stopColor="#5046b8" />
                  </radialGradient>
                  <radialGradient id="globeShade" cx="70%" cy="76%" r="68%">
                    <stop offset="0%" stopColor="#1a1147" stopOpacity="0.5" />
                    <stop offset="55%" stopColor="#1a1147" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="globeHi" cx="34%" cy="26%" r="34%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="62%" stopColor="#7c3aed" stopOpacity="0" />
                    <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Atmosphere glow */}
                <circle
                  cx={GLOBE.cx}
                  cy={GLOBE.cy}
                  r={GLOBE.R + 46}
                  fill="url(#globeGlow)"
                />
                {/* Sphere body */}
                <circle
                  cx={GLOBE.cx}
                  cy={GLOBE.cy}
                  r={GLOBE.R}
                  fill="url(#globeBody)"
                />
                {/* Dotted graticule */}
                {DOTS.map((d, i) => (
                  <circle
                    key={i}
                    cx={d.x}
                    cy={d.y}
                    r={d.r}
                    fill="#ffffff"
                    opacity={d.o}
                  />
                ))}
                {/* Terminator shading + top-left highlight for 3D depth */}
                <circle
                  cx={GLOBE.cx}
                  cy={GLOBE.cy}
                  r={GLOBE.R}
                  fill="url(#globeShade)"
                />
                <circle
                  cx={GLOBE.cx}
                  cy={GLOBE.cy}
                  r={GLOBE.R}
                  fill="url(#globeHi)"
                />
              </svg>

              {countries.map((c) => {
                const p = project(c.lat, c.lng);
                if (!p.front) return null;
                const isActive = c.id === activeId;
                const n = c.offices.length;
                return (
                  <button
                    key={c.id}
                    className={`globe-pin${isActive ? " active" : ""} ${c.labelPos}`}
                    style={{
                      left: `${round((p.x / GLOBE.size) * 100)}%`,
                      top: `${round((p.y / GLOBE.size) * 100)}%`,
                    }}
                    onClick={() => setActiveId(c.id)}
                    aria-label={`${c.label} — ${n} office${n > 1 ? "s" : ""}`}
                  >
                    <span className="globe-pin-pulse" />
                    <span className="globe-pin-dot" />
                    <span className="globe-pin-label">
                      {c.flag} {c.label}
                      <small>
                        {n} office{n > 1 ? "s" : ""}
                      </small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
