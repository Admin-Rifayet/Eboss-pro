"use client";

import { useState } from "react";

/* ── Office locations (from the Awfatech corporate profile) ── */
interface Office {
  tag: string;
  city: string;
  address: string;
  phone?: string;
  lat: number;
  lng: number;
  labelPos: "top" | "bottom";
}

const offices: Office[] = [
  {
    tag: "Headquarters",
    city: "Subang Jaya, Selangor",
    address:
      "No. 5-1, Jalan USJ 1/1A, Regalia Business Center, 47600 Subang Jaya, Selangor, Malaysia",
    phone: "03-8023 4361",
    lat: 3.05,
    lng: 101.58,
    labelPos: "bottom",
  },
  {
    tag: "Branch Office",
    city: "Ipoh, Perak",
    address:
      "No. 80A, Jalan Lang Indah 1/A, Pusat Perniagaan Lang Indah, 30010 Ipoh, Perak, Malaysia",
    lat: 4.6,
    lng: 101.07,
    labelPos: "top",
  },
  {
    tag: "Regional Office",
    city: "Jakarta, Indonesia",
    address: "Jakarta — regional development & operations across the region.",
    lat: -6.2,
    lng: 106.85,
    labelPos: "bottom",
  },
];

/* ── Orthographic globe maths (centred on South-East Asia) ── */
const DEG = Math.PI / 180;
const GLOBE = { size: 600, R: 248, cx: 300, cy: 300, lat0: 1, lng0: 104 };

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
  };
}

/* Round to fixed precision so SSR and client markup match (avoids hydration
   mismatch from full-precision floats). */
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
      const lat0 = GLOBE.lat0 * DEG;
      const r = lat * DEG;
      const dl = lng * DEG - GLOBE.lng0 * DEG;
      const d = Math.max(
        0,
        Math.sin(lat0) * Math.sin(r) +
          Math.cos(lat0) * Math.cos(r) * Math.cos(dl)
      );
      out.push({
        x: round(p.x),
        y: round(p.y),
        o: round(0.16 + 0.6 * d),
        r: round(1.1 + 1.5 * d),
      });
    }
  }
  return out;
})();

export default function AboutGlobe() {
  const [active, setActive] = useState(0);

  return (
    <section className="ag-section">
      <span className="ag-aurora" aria-hidden />
      <div className="container ag-inner">
        <div className="ag-head">
          <span className="ag-kicker sr">Where to find us</span>
          <h2 className="sr" style={{ transitionDelay: ".06s" }}>
            Built in Malaysia, <span className="ag-grad">powered beyond.</span>
          </h2>
          <p className="sr" style={{ transitionDelay: ".12s" }}>
            Headquartered in Selangor, with a northern branch in Ipoh and a
            regional office in Jakarta — serving customers across the region.
          </p>
        </div>

        <div className="ag-layout">
          {/* Office cards */}
          <div className="ag-list">
            {offices.map((o, i) => (
              <button
                key={o.city}
                className={`ag-office sr${i === active ? " active" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
              >
                <span className="ag-office-no">{i + 1}</span>
                <span className="ag-office-body">
                  <span className="ag-office-tag">{o.tag}</span>
                  <span className="ag-office-city">{o.city}</span>
                  <span className="ag-office-addr">{o.address}</span>
                  {o.phone && <span className="ag-office-phone">☎ {o.phone}</span>}
                </span>
              </button>
            ))}

            <div className="ag-contact sr" style={{ transitionDelay: ".4s" }}>
              <a href="mailto:info@awfatech.com">info@awfatech.com</a>
              <span className="ag-dot" aria-hidden>•</span>
              <a href="https://www.awfatech.com" target="_blank" rel="noreferrer">
                www.awfatech.com
              </a>
            </div>
          </div>

          {/* Globe */}
          <div className="ag-stage sr sr-scale">
            <div className="ag-globe">
              <svg
                className="ag-globe-svg"
                viewBox={`0 0 ${GLOBE.size} ${GLOBE.size}`}
                aria-hidden
              >
                <defs>
                  <radialGradient id="agBody" cx="36%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#f3effe" />
                    <stop offset="38%" stopColor="#b9a9f7" />
                    <stop offset="78%" stopColor="#7b6fe0" />
                    <stop offset="100%" stopColor="#4a40aa" />
                  </radialGradient>
                  <radialGradient id="agShade" cx="70%" cy="76%" r="68%">
                    <stop offset="0%" stopColor="#120b38" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#120b38" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="agHi" cx="34%" cy="26%" r="34%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="agGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="60%" stopColor="#7c3aed" stopOpacity="0" />
                    <stop offset="82%" stopColor="#8b5cf6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.R + 52} fill="url(#agGlow)" />
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.R} fill="url(#agBody)" />
                {DOTS.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#ffffff" opacity={d.o} />
                ))}
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.R} fill="url(#agShade)" />
                <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.R} fill="url(#agHi)" />
              </svg>

              {offices.map((o, i) => {
                const p = project(o.lat, o.lng);
                if (!p.front) return null;
                const isActive = i === active;
                return (
                  <button
                    key={o.city}
                    className={`ag-pin${isActive ? " active" : ""} ${o.labelPos}`}
                    style={{
                      left: `${round((p.x / GLOBE.size) * 100)}%`,
                      top: `${round((p.y / GLOBE.size) * 100)}%`,
                    }}
                    onClick={() => setActive(i)}
                    aria-label={o.city}
                  >
                    <span className="ag-pin-pulse" />
                    <span className="ag-pin-dot" />
                    <span className="ag-pin-label">{o.city}</span>
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
