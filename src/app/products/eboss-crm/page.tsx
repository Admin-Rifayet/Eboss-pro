import "../../globals.css";
import "../eboss-cms/cms.css";
import "../eboss-cms/demo/demo.css";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import CmsReveal from "@/components/cms/CmsReveal";
import BrowserMock from "@/components/cms/BrowserMock";
import FeatureGrid, { type Feature } from "@/components/cms/FeatureGrid";

export const metadata: Metadata = {
  title: "Eboss CRM | EBOSSPro",
  description:
    "EBOSS Pro CRM organizes customers, suppliers, quotations, sales activities and communications in one intelligent platform — for stronger relationships and better business efficiency.",
};

/* ── Customer Management features ── */
const CUSTOMER: Feature[] = [
  { icon: "🗂️", title: "Customer Database", desc: "Every customer organized in one searchable, always-up-to-date directory.", hl: true },
  { icon: "👤", title: "Customer Profile", desc: "A complete 360° view of each customer, their details and relationship." },
  { icon: "📈", title: "Sales History", desc: "Full record of past sales, orders and revenue per customer." },
  { icon: "💳", title: "Payment History", desc: "Track invoices, payments and outstanding balances at a glance." },
  { icon: "📇", title: "Contact Management", desc: "Keep phone, email and key contacts tidy and reachable." },
  { icon: "🕒", title: "Activity Timeline", desc: "Every interaction, note and touchpoint in chronological order." },
  { icon: "📝", title: "Customer Notes", desc: "Capture context and follow-ups the whole team can see." },
  { icon: "📊", title: "Customer Reports", desc: "Turn customer data into clear, exportable insights." },
];

/* ── Supplier Management features ── */
const SUPPLIER: Feature[] = [
  { icon: "📁", title: "Supplier Directory", desc: "A central register of every supplier you work with.", hl: true },
  { icon: "🧾", title: "Purchase Records", desc: "Full history of purchases and procurement per supplier." },
  { icon: "💰", title: "Outstanding Payments", desc: "See what's owed and due, with no surprises." },
  { icon: "⚖️", title: "Quotation Comparison", desc: "Compare quotes side by side to buy smarter." },
  { icon: "📶", title: "Supplier Performance", desc: "Rate and track reliability, delivery and quality." },
  { icon: "📇", title: "Contact Management", desc: "Keep supplier contacts and details organized." },
  { icon: "📑", title: "Procurement Reports", desc: "Analyse spend and procurement trends over time." },
  { icon: "🗃️", title: "Document Management", desc: "Store POs, contracts and documents against each supplier." },
];

/* ── Dashboard insights ── */
const DASHBOARD: Feature[] = [
  { icon: "📈", title: "Customer Growth", desc: "Track new and returning customers over time." },
  { icon: "🤝", title: "Supplier Performance", desc: "Monitor supplier reliability at a glance." },
  { icon: "💰", title: "Outstanding Balance", desc: "Real-time view of receivables and payables." },
  { icon: "🛎️", title: "Sales Activities", desc: "Stay on top of follow-ups and open deals." },
  { icon: "📊", title: "Purchase Trends", desc: "Understand procurement patterns and spend." },
  { icon: "📉", title: "Analytics Dashboard", desc: "One live dashboard for every relationship metric." },
];

const WHY = [
  "Centralized Customer Database",
  "Better Supplier Management",
  "Faster Sales Follow-up",
  "Business Intelligence Dashboard",
  "Improve Customer Satisfaction",
];

export default function EbossCrmPage() {
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
            <span className="cmx-hero-tag cms-reveal">✦ EBOSS Pro CRM</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              Build stronger
              <br />
              <span className="cmx-grad">customer relationships.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              Every customer interaction matters. EBOSS Pro CRM organizes
              customers, suppliers, quotations, sales activities and
              communications in one intelligent platform — so you deliver better
              experiences while improving business efficiency.
            </p>
          </div>

          <div
            className="cmx-hero-stage cms-reveal-scale"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <BrowserMock
              src="/crm/customer.png"
              alt="EBOSS Pro CRM — customer management module"
              label="/admin/crm"
            />
          </div>

          <span className="cmx-scroll-cue" aria-hidden>
            Scroll
          </span>
        </header>

        {/* ════════════ INTRO STATEMENT ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <p className="cmx-statement cms-reveal cmx-blur cmx-rise-lg">
              One platform for customers, suppliers and everything in between —
              so your team stops juggling{" "}
              <span className="dim">spreadsheets and disconnected tools.</span>
            </p>
          </div>
        </section>

        {/* ════════════ CUSTOMER MANAGEMENT ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/crm/customer.png"
                  alt="Customer management — database, profiles and history"
                  label="/admin/crm/customers"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Customer Management</span>
                <h3>Keep every customer organized.</h3>
                <p>
                  A single, searchable record for each customer — profile, sales
                  and payment history, contacts and every interaction on one
                  timeline.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>360° customer profile</h4>
                    <p>Details, sales history, payments and notes in one place.</p>
                  </li>
                  <li>
                    <h4>Activity timeline</h4>
                    <p>Every touchpoint and follow-up, in chronological order.</p>
                  </li>
                  <li>
                    <h4>Reports that matter</h4>
                    <p>Turn customer data into clear, exportable insight.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer feature grid */}
        <section className="cmx-section tight">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Customer Management</span>
            <h2 className="cmx-h">Everything about your customers, in one view</h2>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={CUSTOMER} />
          </div>
        </section>

        {/* ════════════ SUPPLIER MANAGEMENT ════════════ */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Supplier Management</span>
            <h2 className="cmx-h">Manage procurement efficiently</h2>
            <p className="cmx-sub">
              From supplier directory to purchase records and quotation
              comparison — buy smarter and pay on time.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={SUPPLIER} />
          </div>
        </section>

        {/* ════════════ CRM DASHBOARD ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">CRM Dashboard</span>
            <h2 className="cmx-h">Monitor relationships with real-time insight</h2>
            <p className="cmx-sub">
              One live dashboard turns customer and supplier data into decisions.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={DASHBOARD} />
          </div>
        </section>

        {/* ════════════ WHY CRM ════════════ */}
        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Why EBOSS Pro CRM</span>
            <h2 className="cmx-h">Built to grow relationships</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-chips cms-reveal" style={{ marginTop: "36px" }}>
              {WHY.map((w) => (
                <span key={w}>✓ {w}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CLOSING ════════════ */}
        <section className="cmx-closing">
          <div className="cmx-wrap-narrow cms-reveal">
            <h2>
              One platform.
              <br />
              <span className="cmx-grad">Stronger relationships.</span>
            </h2>
            <p>
              Customers, suppliers and insights together — so every interaction
              moves the business forward.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
