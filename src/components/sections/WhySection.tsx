/* "Why EBOSSPro" — value-proposition feature section.
   Content sourced from the Awfatech corporate profile (ISO 27001, ITEX '14
   award, 15+ yrs, cloud SaaS, 1,000+ customers / 2,000+ institutions, 1M+
   users). Cards reveal on scroll via the shared `.sr` engine. */

import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  body: string;
}

/* Clean stroke icons (Lucide-style) — inherit the gradient stroke from CSS. */
const I = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 18a4 4 0 010-8 5.5 5.5 0 0110.6-1.5A4 4 0 0117 18H7z" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3" />
      <path d="M4 12v4a2 2 0 002 2h1v-6H4" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  ),
};

const features: Feature[] = [
  {
    icon: I.shield,
    title: "ISO 27001 Certified",
    body: "Information-security management certified to international standards — your business data stays protected.",
  },
  {
    icon: I.award,
    title: "Award-Winning Innovation",
    body: "Recipient of the Malaysian Innovative Product Award (ITEX ’14) for cloud-based business systems.",
  },
  {
    icon: I.cloud,
    title: "Cloud SaaS, Any Device",
    body: "Real-time dashboards with seamless access from anywhere — desktop, tablet or mobile.",
  },
  {
    icon: I.layers,
    title: "All-in-One Platform",
    body: "Finance, HR, operations, AI and customer engagement unified in a single ERP ecosystem.",
  },
  {
    icon: I.support,
    title: "Affordable & Local Support",
    body: "Purpose-built for SMEs and education, with dedicated onboarding and local support you can reach.",
  },
  {
    icon: I.trend,
    title: "Trusted at Scale",
    body: "1,000+ businesses, 2,000+ institutions and 1M+ users — backed by 15+ years of expertise.",
  },
];

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-aurora" aria-hidden />
      <div className="container">
        <div className="why-head">
          <span className="why-kicker">Why EBOSSPro</span>
          <h2 className="why-title">
            Built for trust.{" "}
            <span className="why-title-grad">Engineered to scale.</span>
          </h2>
          <p className="why-sub">
            More than software — a cloud platform backed by certified security,
            award-winning innovation and over 15 years of helping organizations
            grow.
          </p>
        </div>

        <div className="why-grid">
          {features.map((f, i) => (
            <div
              className="why-card sr"
              key={f.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="why-card-glow" aria-hidden />
              <span className="why-card-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
