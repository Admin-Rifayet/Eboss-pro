import "../globals.css";
import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import HomeReveal from "@/components/sections/HomeReveal";
import AboutGlobe from "@/components/sections/AboutGlobe";

export const metadata: Metadata = {
  title: "About Us | EBOSSPro by Awfatech",
  description:
    "Awfatech is an award-winning, ISO 27001-certified Application Service Provider delivering cloud ERP, AI and managed services to SMEs and education across the region.",
};

/* Content sourced from the Awfatech Corporate Profile (2026):
   business evolution, mission/vision, values, stats and office locations. */

const values = [
  {
    icon: "⚙️",
    title: "Cutting-Edge Technology",
    body: "A dedicated R&D team continually builds on the latest technology while keeping solutions affordable.",
  },
  {
    icon: "📈",
    title: "Helping Thousands to Grow",
    body: "From startups to enterprises, our platform scales with organizations as their operations expand.",
  },
  {
    icon: "🤝",
    title: "Customers First, Always",
    body: "Flexible licensing, dedicated onboarding and local support keep our customers at the centre of everything.",
  },
];

const stats = [
  { num: "15+", label: "Years of experience" },
  { num: "1,000+", label: "Businesses served" },
  { num: "2,000+", label: "Institutions" },
  { num: "1M+", label: "Active users" },
];

/* Product suite (ASIS, Smart eMasjid, MyStrata, SME, Enterprise, Cloud). */
const solutions = [
  {
    icon: "🎓",
    name: "ASIS — Education",
    body: "Manage schools, kindergartens, tahfiz and academies end-to-end. Trusted by 2,000+ institutions.",
  },
  {
    icon: "🕌",
    name: "Smart eMasjid",
    body: "Cloud operations for masjids and Islamic departments. 160+ masjids under MAIS run on it.",
  },
  {
    icon: "🏢",
    name: "MyStrata",
    body: "All-in-one system for JMB/MC to manage finance, maintenance, residents and facilities.",
  },
  {
    icon: "💼",
    name: "SME Management",
    body: "HR, finance, sales, inventory, orders and reports — everything an SME runs, in one place.",
  },
  {
    icon: "⚙️",
    name: "Enterprise ERP",
    body: "Planning, production, HR, finance, CRM, inventory and reporting for larger organizations.",
  },
  {
    icon: "☁️",
    name: "Cloud & Data Center",
    body: "Multi-cloud hosting and managed infrastructure across Cyberjaya, Kuala Lumpur and Singapore.",
  },
];

/* Sectors served (corporate profile, page 5). */
const sectors = ["Education", "SMEs", "Masjid", "Strata", "Enterprise"];

/* Leadership (organizational structure, page 14). */
const leaders = [
  { name: "Tn. Hj Romli Hussin", role: "Chairman" },
  { name: "Razali Ahmad", role: "Chief Executive Officer" },
  { name: "Zamri Tebi", role: "President" },
  { name: "Aizad Ainudin", role: "COO / CFO" },
  { name: "Shahiran", role: "Vice President, Enterprise" },
  { name: "Nazirruddin", role: "Vice President, Government" },
];

/* Strategic partners & clients (pages 7 & 10). */
const partners = [
  "SME Corporation Malaysia",
  "Majlis Amanah Rakyat (MARA)",
  "Lembaga Zakat Selangor",
  "Majlis Agama Islam Wilayah Persekutuan (MAIWP)",
  "Jabatan Agama Islam Negeri Perak",
  "Jabatan Agama Islam Selangor",
];

const initials = (name: string) =>
  name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <MegaMenu />
      <HomeReveal />

      <main className="about">
        {/* Hero */}
        <section className="about-hero">
          <span className="about-aurora" aria-hidden />
          <div className="container about-hero-inner">
            <span className="about-eyebrow sr">About Awfatech</span>
            <h1 className="sr" style={{ transitionDelay: ".06s" }}>
              Empowering business with{" "}
              <span className="about-grad">cloud, AI and ERP.</span>
            </h1>
            <p className="sr" style={{ transitionDelay: ".14s" }}>
              Awfatech is an Application Service Provider specializing in
              cloud-based management systems for Small &amp; Medium Enterprises
              and the education industry. Built inside Malaysia, powered beyond —
              trusted by organizations across the region since 2012.
            </p>
            <div className="about-hero-badges sr" style={{ transitionDelay: ".22s" }}>
              <span>🛡️ ISO 27001 Certified</span>
              <span>🏆 ITEX ’14 Award</span>
              <span>☁️ Software-as-a-Service</span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats">
          <div className="container about-stats-grid">
            {stats.map((s, i) => (
              <div className="about-stat sr" key={s.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="about-story">
          <div className="container about-story-grid">
            <div className="about-story-main">
              <span className="about-kicker sr">Our Story</span>
              <h2 className="section-title sr" style={{ transitionDelay: ".06s" }}>
                From two founders to a regional platform.
              </h2>
              <p className="sr" style={{ transitionDelay: ".12s" }}>
                What began with two members has grown into a team of over 20
                across Kuala Lumpur and Jakarta. Over 15+ years we have adapted
                to change and technology to remain a premier solution provider —
                earning ISO 27001 certification for information-security
                management and the Malaysian Innovative Product Award (ITEX ’14).
              </p>
              <p className="sr" style={{ transitionDelay: ".18s" }}>
                Today our SaaS platform unifies ERP, applied AI and managed
                services, adopted by 1,000+ businesses, 2,000+ educational
                institutions and more than a million users.
              </p>
            </div>

            <div className="about-mv">
              <div className="about-mv-card sr" style={{ transitionDelay: ".1s" }}>
                <h3>Mission</h3>
                <p>
                  To become the premier Software-as-a-Service provider,
                  affordable to school and business industries across the globe.
                </p>
              </div>
              <div className="about-mv-card sr" style={{ transitionDelay: ".18s" }}>
                <h3>Vision</h3>
                <ul>
                  <li>Simplified, affordable solutions for all industries.</li>
                  <li>Exemplary ethical values in every engagement.</li>
                  <li>Nurturing young Malaysian talent to reach their goals.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions / product suite */}
        <section className="about-solutions">
          <div className="container">
            <div className="about-sol-head">
              <span className="about-kicker sr">What we build</span>
              <h2 className="section-title sr" style={{ transitionDelay: ".06s" }}>
                One platform, a full suite of solutions.
              </h2>
              <p className="section-sub sr" style={{ transitionDelay: ".12s" }}>
                From classrooms to corporations, our cloud systems power the
                operations of every sector we serve.
              </p>
              <div className="about-sectors sr" style={{ transitionDelay: ".18s" }}>
                {sectors.map((s) => (
                  <span className="about-sector" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="about-sol-grid">
              {solutions.map((s, i) => (
                <div className="about-sol-card sr" key={s.name} style={{ transitionDelay: `${i * 0.07}s` }}>
                  <span className="about-sol-icon" aria-hidden>{s.icon}</span>
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="container">
            <div className="about-values-head">
              <span className="about-kicker sr">What drives us</span>
              <h2 className="section-title sr" style={{ transitionDelay: ".06s" }}>
                The values behind every release.
              </h2>
            </div>
            <div className="about-values-grid">
              {values.map((v, i) => (
                <div className="about-value-card sr" key={v.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="about-value-icon" aria-hidden>{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="about-team">
          <div className="container">
            <div className="about-team-head">
              <span className="about-kicker sr">Leadership</span>
              <h2 className="section-title sr" style={{ transitionDelay: ".06s" }}>
                Guided by experienced hands.
              </h2>
            </div>
            <div className="about-team-grid">
              {leaders.map((l, i) => (
                <div className="about-team-card sr" key={l.name} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="about-team-avatar" aria-hidden>{initials(l.name)}</span>
                  <div className="about-team-info">
                    <h3>{l.name}</h3>
                    <span>{l.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership quote */}
        <section className="about-quote">
          <div className="container">
            <blockquote className="about-quote-card sr">
              <p>
                “We are delegating the best solution to your business — striking
                a balance between profits and principles, and prioritizing
                high-quality products and services to meet customer needs.”
              </p>
              <footer>
                <strong>Razali Ahmad</strong>
                <span>Chief Executive Officer, Awfatech Global Sdn Bhd</span>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Strategic partners & clients */}
        <section className="about-partners">
          <div className="container">
            <div className="about-partners-head">
              <span className="about-kicker sr">Strategic partners &amp; clients</span>
              <h2 className="section-title sr" style={{ transitionDelay: ".06s" }}>
                Trusted by leading organizations.
              </h2>
            </div>
            <div className="about-partner-grid">
              {partners.map((p, i) => (
                <div className="about-partner-card sr" key={p} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <span className="about-partner-badge" aria-hidden>{initials(p)}</span>
                  <span className="about-partner-name">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices & contact — interactive globe */}
        <AboutGlobe />
      </main>

      <Footer />
    </>
  );
}
