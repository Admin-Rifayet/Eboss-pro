import Link from "next/link";
import { products, type Product } from "@/data/products";
import { getProductContent } from "@/lib/productContent";

const clean = (s: string) => s.replace(/&amp;/g, "&");

export default function ProductPage({ product }: { product: Product }) {
  const t = clean(product.title);
  const category = clean(product.category);
  const c = getProductContent(product);

  const related = Object.values(products)
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="pp-hero">
        <div className="pp-hero-inner pp-hero-grid">
          <div className="pp-hero-copy">
            <div className="pp-breadcrumb">
              <Link href="/">Products</Link>
              <span>›</span>
              <a href="#">{category}</a>
              <span>›</span>
              <span className="cur">{t}</span>
            </div>
            <h1 className="pp-title">{t}</h1>
            <p className="pp-sub">{clean(product.desc)}</p>
            <div className="pp-hero-cta">
              <button className="pp-btn">Get started with {t}</button>
              <button className="pp-btn-outline">Request a demo</button>
            </div>
          </div>
          <div className="pp-hero-visual" style={{ background: c.heroAccent }}>
            <span className="pp-hero-icon">{c.heroIcon}</span>
            <span className="pp-hero-vlabel">{c.domainLabel}</span>
            <span className="pp-hero-vname">{t}</span>
          </div>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <div className="pp-highlights">
        <div className="pp-wrap pp-highlights-grid">
          {c.highlights.map((h) => (
            <div key={h.label} className="pp-hl">
              <div className="pp-hl-stat">{h.stat}</div>
              <div className="pp-hl-label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Overview + key capabilities ── */}
      <section className="pp-section" id="overview">
        <div className="pp-wrap pp-overview">
          <div className="pp-overview-main">
            <h2 className="pp-h2">Why {t}?</h2>
            <p className="pp-lead">{c.lead}</p>
          </div>
          <aside className="pp-capabilities">
            <h3>Key capabilities</h3>
            <ul>
              {c.keyCapabilities.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="pp-section alt" id="how">
        <div className="pp-wrap">
          <h2 className="pp-h2">How it works</h2>
          <div className="pp-steps">
            {c.steps.map((s, i) => (
              <div className="pp-step" key={s.title}>
                <div className="pp-step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="pp-section" id="benefits">
        <div className="pp-wrap">
          <h2 className="pp-h2">Benefits</h2>
          <div className="pp-grid">
            {c.benefits.map((b) => (
              <div className="pp-card" key={b.title}>
                <div className="pp-card-ico">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="pp-section alt" id="features">
        <div className="pp-wrap">
          <h2 className="pp-h2">Features</h2>
          <div className="pp-grid pp-grid-3">
            {c.features.map((f) => (
              <div className="pp-card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="pp-section" id="usecases">
        <div className="pp-wrap">
          <h2 className="pp-h2">Use cases</h2>
          <div className="pp-grid pp-grid-3">
            {c.useCases.map((u) => (
              <div className="pp-card" key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pp-section alt" id="faq">
        <div className="pp-wrap pp-wrap-narrow">
          <h2 className="pp-h2">Frequently asked questions</h2>
          <div className="pp-faq">
            {c.faqs.map((f) => (
              <details className="pp-faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="pp-section" id="related">
          <div className="pp-wrap">
            <h2 className="pp-h2">More in {category}</h2>
            <div className="pp-grid pp-grid-3">
              {related.map((r) => (
                <Link className="pp-related" href={`/products/${r.slug}`} key={r.slug}>
                  <h3>{clean(r.title)}</h3>
                  <p>{clean(r.desc)}</p>
                  <span className="pp-related-link">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Get started ── */}
      <section className="pp-section alt" id="getstarted">
        <div className="pp-wrap">
          <h2 className="pp-h2">Get started with {t}</h2>
          <div className="pp-grid pp-grid-3">
            <div className="pp-cta-card">
              <h3>Start for free</h3>
              <p>Create an account and explore {t} with full platform access — no credit card required.</p>
              <button className="pp-btn">Create a free account</button>
            </div>
            <div className="pp-cta-card">
              <h3>See how it works</h3>
              <p>Book a guided walkthrough and see {t} configured for your business.</p>
              <button className="pp-btn-outline">Request a demo</button>
            </div>
            <div className="pp-cta-card">
              <h3>Talk to an expert</h3>
              <p>Have questions? Our team will help you plan your rollout and pricing.</p>
              <button className="pp-btn-outline">Contact sales</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
