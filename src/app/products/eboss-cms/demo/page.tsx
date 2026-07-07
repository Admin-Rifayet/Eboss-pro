import "../../../globals.css";
import "../cms.css";
import "./demo.css";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import CmsReveal from "@/components/cms/CmsReveal";
import BrowserMock from "@/components/cms/BrowserMock";
import MenuVideo from "@/components/cms/MenuVideo";
import AutoVideo from "@/components/cms/AutoVideo";
import FeatureGrid from "@/components/cms/FeatureGrid";

export const metadata: Metadata = {
  title: "Eboss CMS | EBOSSPro",
  description:
    "A modern admin studio and a production-grade public storefront, engineered as a single platform — explained section by section.",
};

/* Steps for the menu-builder spotlight */
const MENU_STEPS = [
  { t: "Drag, drop, done", d: "Reorder items with optimistic UI — the layout updates before the server even confirms." },
  { t: "Four levels of nesting", d: "Build deep, hierarchical navigation without ever leaving the builder." },
  { t: "Point anywhere", d: "Link to an external URL, a static page, the marketplace, or a donation — search CMS pages right inside the picker." },
];

/* Capability groups for the AI assistant spotlight */
const AI_CAPS = [
  { t: "Ask about your site", d: "“What can you do?”, “How do I use this?” — the assistant explains every module in plain language." },
  { t: "Take real actions", d: "“Suggest 3 brand palettes”, “Recommend a template from my content”, “Apply a calming palette” — it changes the site, not just chats." },
  { t: "Navigate for you", d: "Jump straight to Configuration, News, Galleries or any module — the assistant takes you there." },
];

/* Every content module the studio manages */
const MODULES = [
  { icon: "📰", title: "News & articles", desc: "Author news with a rich editor, mark posts as trending, and publish or unpublish in bulk." },
  { icon: "📄", title: "Static pages", desc: "Build standalone pages — about, policies, landing content — with live/draft status." },
  { icon: "🖼️", title: "Galleries", desc: "Organise images into categories with titles and links for the public storefront." },
  { icon: "❓", title: "FAQ", desc: "Maintain a structured question-and-answer section that renders straight to the site." },
  { icon: "🧩", title: "Plugins", desc: "Register external tools and integrations by category and URL, toggled live per branch." },
  { icon: "🧱", title: "Footer builder", desc: "Compose the footer in configurable columns — links, contact, and brand info." },
];

export default function EbossCmsDemoPage() {
  return (
    <>
      <Topbar />
      <Navbar flush dark />
      <MegaMenu dark />
      <CmsReveal />

      <main className="cmx">
        {/* ════════════ HERO ════════════ */}
        <header className="cmx-hero">
          <div className="cmx-hero-veil" aria-hidden />
          <div className="cmx-wrap">
            <span className="cmx-hero-tag cms-reveal">✦ Eboss CMS Platform</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              One platform.
              <br />
              Two apps.
              <br />
              <span className="cmx-grad">Total control.</span>
            </h1>
            <p className="cmx-hero-lead cms-reveal" style={{ "--d": "200ms" } as CSSProperties}>
              A modern admin studio and a production-grade public storefront,
              engineered as a single platform.
            </p>
          </div>

          <div className="cmx-hero-stage cms-reveal-scale" style={{ "--d": "320ms" } as CSSProperties}>
            <BrowserMock
              src="/cms/hero-storefront.png"
              alt="Public storefront rendered by Eboss CMS"
              label="/cms/hero-storefront.png"
            />
          </div>

          <span className="cmx-scroll-cue" aria-hidden>Scroll</span>
        </header>

        {/* ════════════ INTRO STATEMENT ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <p className="cmx-statement cms-reveal cmx-blur cmx-rise-lg">
              Meet Eboss CMS — an admin studio and a public storefront,
              built as one platform so the people who manage your content and
              the visitors who see it are never working against{" "}
              <span className="dim">two disconnected systems.</span>
            </p>
          </div>
        </section>

        {/* ════════════ STAGE 1 — the storefront (image + caption) ════════════ */}
        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap">
            <div className="cmx-stage cms-reveal-scale cmx-clip">
              <BrowserMock
                src="/cms/public-storefront.png"
                alt="Public storefront — themed, server-rendered"
                label="/cms/public-storefront.png"
              />
            </div>
            <div className="cmx-cap cms-reveal">
              <h3>The site your visitors actually see</h3>
              <p>
                Server-rendered, SEO-friendly, and fully themed. Everything the
                admin produces appears here — fast, clean, and on-brand.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════ SPLIT — Admin Studio (image + details) ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/cms/admin-studio.png"
                  alt="Admin Studio control panel"
                  label="/cms/admin-studio.png"
                />
              </div>
              <div className="cmx-split-text cms-reveal cmx-blur" style={{ "--d": "120ms" } as CSSProperties}>
                <span className="cmx-eyebrow">Admin Studio</span>
                <h3>A control panel built for real teams</h3>
                <p>
                  Opinionated, polished, and genuinely pleasant to use — so
                  non-technical staff manage the whole public site from one place.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Every module, first-class</h4>
                    <p>News, menus, banners, static pages, galleries, FAQ, plugins and footer — managed, not bolted on.</p>
                  </li>
                  <li>
                    <h4>Multi-branch &amp; multi-language</h4>
                    <p>Every dataset is scoped to a branch and locale — switch context globally in one click.</p>
                  </li>
                  <li>
                    <h4>Dark mode throughout</h4>
                    <p>A polished dark theme across the entire studio, with bulk publish, delete and restore.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ STATS BAND ════════════ */}
        <section className="cmx-section tight cmx-panel-soft">
          <div className="cmx-wrap cms-reveal cmx-center">
            <span className="cmx-eyebrow">By the numbers</span>
            <h2 className="cmx-h">See how complete the platform is</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-stats">
              <div className="cmx-stat cms-reveal">
                <div className="num">13<small>modules</small></div>
                <div className="lbl">First-class admin modules covering everything your site shows.</div>
              </div>
              <div className="cmx-stat cms-reveal" style={{ "--d": "100ms" } as CSSProperties}>
                <div className="num">4<small>levels</small></div>
                <div className="lbl">Of drag-and-drop menu nesting, built visually.</div>
              </div>
              <div className="cmx-stat cms-reveal" style={{ "--d": "200ms" } as CSSProperties}>
                <div className="num">6+<small>themes</small></div>
                <div className="lbl">Ready-made storefront looks — rebrand the whole site instantly.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ CONFIGURATION + LIVE PREVIEW (image + details) ════════════ */}
        <section className="cmx-section" id="cms-config">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/cms/configuration.png"
                  alt="Configuration screen — theming, navbar, banners and contact with live preview"
                  label="/cms/configuration"
                />
              </div>
              <div className="cmx-split-text cms-reveal cmx-blur" style={{ "--d": "120ms" } as CSSProperties}>
                <span className="cmx-eyebrow">Configuration</span>
                <h3>Theme the entire site — no code, with live preview</h3>
                <p>
                  One configuration hub controls the whole storefront. Set the
                  logo, pick a template, tune every colour, and watch it update
                  in a live preview before you publish.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Navbar &amp; banner styling</h4>
                    <p>Backgrounds, fonts, icons, dropdown opacity — fine-grained control over the chrome.</p>
                  </li>
                  <li>
                    <h4>Brand colours &amp; logo</h4>
                    <p>Primary, secondary and text colours, plus the site logo and visitor-counter toggle.</p>
                  </li>
                  <li>
                    <h4>Contact &amp; footer</h4>
                    <p>Email, phone, address and footer colours, all from the same screen.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ AI ASSISTANT (spotlight) ════════════ */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">✦ AI Agent inside</span>
            <h2 className="cmx-h">An assistant that actually does things</h2>
            <p className="cmx-sub">
              Not a bolt-on chatbot — a working agent that understands your site,
              changes its theme, recommends templates, and takes you anywhere.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-stage cms-reveal-scale cmx-clip" style={{ marginTop: "56px" }}>
              <BrowserMock badge="✦ AI Assistant" src="/cms/ai-assistant.png" alt="AI assistant panel inside the studio" />
            </div>
            <div className="cmx-stats" style={{ marginTop: "44px" }}>
              {AI_CAPS.map((s, i) => (
                <div
                  key={s.t}
                  className="cmx-stat cms-reveal"
                  style={{ "--d": `${i * 100}ms`, textAlign: "left", padding: "30px 28px" } as CSSProperties}
                >
                  <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{s.t}</h4>
                  <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ AI — color templates (video + details) ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <div className="cmx-ai-media">
                  <span className="cmx-ai-badge">✦ AI</span>
                  <AutoVideo base="ai-color-template" />
                </div>
              </div>
              <div className="cmx-split-text cms-reveal cmx-blur" style={{ "--d": "120ms" } as CSSProperties}>
                <span className="cmx-eyebrow">✦ AI in action</span>
                <span className="cmx-prompt">“Make it warm and trustworthy”</span>
                <h3>Describe a vibe. Get a whole theme.</h3>
                <p>
                  Tell the assistant the feeling you want and it generates a
                  complete, on-brand colour theme for the entire site, applied
                  live. No design skills required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ AI — news titles (video + details, flipped) ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split flip">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <div className="cmx-ai-media">
                  <span className="cmx-ai-badge">✦ AI</span>
                  <AutoVideo base="ai-news-title" />
                </div>
              </div>
              <div className="cmx-split-text cms-reveal cmx-blur" style={{ "--d": "120ms" } as CSSProperties}>
                <span className="cmx-eyebrow">✦ AI in action</span>
                <span className="cmx-prompt">“Summarize this into a headline”</span>
                <h3>Sharp, publish-ready headlines in seconds</h3>
                <p>
                  The agent reads your article and writes clear, compelling
                  titles on demand — so editorial content goes out faster, and
                  your team spends time on the story, not the wording.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ ANALYTICS DASHBOARD ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal cmx-blur">
            <span className="cmx-eyebrow">Analytics</span>
            <h2 className="cmx-h">
              Know who&apos;s visiting,
              <br />
              <span className="cmx-grad">in real time</span>
            </h2>
            <p className="cmx-sub">
              A built-in dashboard tracks total visitors, new users and traffic
              trends — broken down by day, week, month and year, with a device
              mix across desktop, mobile and tablet.
            </p>
          </div>
          <div className="cmx-wrap cms-reveal-scale cmx-clip" style={{ "--d": "120ms" } as CSSProperties}>
            <BrowserMock
              src="/cms/analytics-dashboard.png"
              alt="CMS analytics dashboard — visitors, traffic and device usage"
              label="/cms/dashboard"
            />
          </div>
        </section>

        {/* ════════════ SPOTLIGHT — Menu builder (video + details) ════════════ */}
        <section className="cmx-section cmx-panel-soft" id="cms-menu">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Spotlight</span>
            <h2 className="cmx-h">A menu builder people actually enjoy</h2>
            <p className="cmx-sub">
              Build navigation visually — drag items, nest submenus, and point
              each link anywhere, with instant feedback.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-stage cms-reveal-scale cmx-clip" style={{ marginTop: "56px" }}>
              <BrowserMock badge="● Menu builder">
                <MenuVideo />
              </BrowserMock>
            </div>
            <div className="cmx-stats" style={{ marginTop: "44px" }}>
              {MENU_STEPS.map((s, i) => (
                <div
                  key={s.t}
                  className="cmx-stat cms-reveal"
                  style={{ "--d": `${i * 100}ms`, textAlign: "left", padding: "30px 28px" } as CSSProperties}
                >
                  <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{s.t}</h4>
                  <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ BANNERS (image + details) ════════════ */}
        <section className="cmx-section" id="cms-banners">
          <div className="cmx-wrap">
            <div className="cmx-split flip">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/cms/header-banners.png"
                  alt="Header banner manager — drag to reorder, set live"
                  label="/cms/header-banners"
                />
              </div>
              <div className="cmx-split-text cms-reveal cmx-blur" style={{ "--d": "120ms" } as CSSProperties}>
                <span className="cmx-eyebrow">Banners</span>
                <h3>Three banner systems, one workflow</h3>
                <p>
                  Header slideshows, side banners and promotion banners — each
                  managed separately, reordered by drag-and-drop, and switched
                  between live and draft in a click.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Header slideshow</h4>
                    <p>Multiple media per set, reordered visually, with one active set live at a time.</p>
                  </li>
                  <li>
                    <h4>Side &amp; promotion banners</h4>
                    <p>Targeted placements with their own “where to see” rules and live status.</p>
                  </li>
                  <li>
                    <h4>Set live instantly</h4>
                    <p>Stage banners as drafts, then publish the exact set you want with Set Live.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ PRE-LAUNCH TEMPLATES (image + caption) ════════════ */}
        <section className="cmx-section cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Pre-launch templates</span>
            <h2 className="cmx-h">Maintenance &amp; Coming Soon, ready to ship</h2>
            <p className="cmx-sub">
              Take the site offline gracefully or tease a launch — choose from
              ready-made designs and set a live countdown, all without touching code.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-stage cms-reveal-scale cmx-clip" style={{ marginTop: "48px" }}>
              <BrowserMock
                src="/cms/prelaunch-templates.png"
                alt="Pre-launch templates — maintenance and coming-soon designs with countdown"
                label="/cms/page-designs"
              />
            </div>
            <div className="cmx-stats" style={{ marginTop: "44px" }}>
              <div className="cmx-stat cms-reveal" style={{ textAlign: "left", padding: "30px 28px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>Maintenance mode</h4>
                <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>Pick from designs like Unplugged, Stargazer, Toolkit or Workshop, with your own title and message.</p>
              </div>
              <div className="cmx-stat cms-reveal" style={{ "--d": "100ms", textAlign: "left", padding: "30px 28px" } as CSSProperties}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>Coming soon</h4>
                <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>Countdown, Subscribe, Aurora or Launch designs — tease what&apos;s next and collect notify sign-ups.</p>
              </div>
              <div className="cmx-stat cms-reveal" style={{ "--d": "200ms", textAlign: "left", padding: "30px 28px" } as CSSProperties}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>Live countdown</h4>
                <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>Set the launch time in days and hours — the public page counts down automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ THEME SHOWCASE ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Theme gallery</span>
            <h2 className="cmx-h">Pick a look. Ship today.</h2>
            <p className="cmx-sub">
              Ready-made themes let an organization choose a design without
              custom code — the whole site rebrands in one switch.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-themes">
              {[
                { n: 1, desc: "Marketplace-ready" },
                { n: 2, desc: "Clean corporate" },
                { n: 3, desc: "Bold editorial" },
                { n: 4, desc: "Minimal NGO" },
                { n: 5, desc: "Community / mosque" },
                { n: 6, desc: "School & education" },
              ].map((t, i) => (
                <div key={t.n} className="cmx-theme cms-reveal-scale cmx-clip" style={{ "--d": `${(i % 2) * 100}ms` } as CSSProperties}>
                  <BrowserMock src={`/cms/demo${t.n}.png`} alt={`Demo ${t.n} theme`} label={`/cms/demo${t.n}.png`} />
                  <div className="cmx-theme-name">
                    Demo {t.n} <span>— {t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CONTENT MODULES ════════════ */}
        <section className="cmx-section cmx-panel-soft" id="cms-content">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Content modules</span>
            <h2 className="cmx-h">Everything your site shows, managed</h2>
            <p className="cmx-sub">
              Beyond banners and themes, every part of the public site is a
              first-class module in the studio.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "48px" }}>
            <FeatureGrid features={MODULES} />
          </div>
        </section>

        {/* ════════════ ARCHITECTURE ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Architecture</span>
            <h2 className="cmx-h">Two apps, one data flow</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-flow cms-reveal">
              <div className="cmx-flow-node">
                <div className="ico">🛠️</div>
                <h4>Admin Studio</h4>
                <p>Staff manage content, menus, branches</p>
              </div>
              <div className="cmx-flow-arrow">→</div>
              <div className="cmx-flow-node">
                <div className="ico">🔌</div>
                <h4>API</h4>
                <p>Branch- &amp; locale-scoped content API</p>
              </div>
              <div className="cmx-flow-arrow">→</div>
              <div className="cmx-flow-node">
                <div className="ico">🌐</div>
                <h4>Public Storefront</h4>
                <p>Themed, server-rendered, SEO-friendly</p>
              </div>
            </div>
            <div className="cmx-chips cms-reveal">
              {["Next.js 15 / 16", "React 19", "TypeScript", "Tailwind v4", "NextAuth + Upstash KV", "Docker standalone", "Multi-branch + i18n"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CLOSING (no buttons) ════════════ */}
        <section className="cmx-closing">
          <div className="cmx-wrap-narrow cms-reveal">
            <h2>
              One platform.
              <br />
              <span className="cmx-grad">No tradeoff.</span>
            </h2>
            <p>
              An admin studio that&apos;s genuinely pleasant to use, and a
              storefront that looks designed — not generated.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
