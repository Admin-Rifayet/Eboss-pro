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
  title: "Eboss Claims | EBOSSPro",
  description:
    "A complete claims workflow — submit, allocate, approve and pay. Medical, travel, mileage and more, with receipt upload, approval routing and full reporting.",
};

const FEATURES: Feature[] = [
  { icon: "🧾", title: "Every Claim Type", desc: "Medical, travel, mileage, lodging, petty cash and purchase claims.", hl: true },
  { icon: "📎", title: "Receipt Upload", desc: "Attach receipts and documents directly to each claim." },
  { icon: "✅", title: "Approval Workflow", desc: "Multi-level review with clear approve, reject and query steps." },
  { icon: "🎯", title: "Allocation & Routing", desc: "Set claim entitlements by division and position, routed automatically." },
  { icon: "📌", title: "Status Tracking", desc: "Follow every claim from submitted to paid, with days-pending." },
  { icon: "💳", title: "Payments", desc: "Mark claims paid and reconcile amounts against approvals." },
  { icon: "📊", title: "Reports & Analytics", desc: "Approval rate, average approval time and spend by type." },
  { icon: "🗂️", title: "Documents & Audit", desc: "Full document store and an auditable trail for every action." },
];

const WHY = [
  "Faster Reimbursements",
  "Policy-Based Allocation",
  "Multi-Level Approvals",
  "Full Status Visibility",
  "Analytics & Audit Trail",
  "Cloud Based",
];

export default function EbossClaimsPage() {
  return (
    <>
      <Topbar />
      <Navbar flush dark />
      <MegaMenu dark />
      <CmsReveal />

      <main className="cmx">
        <header className="cmx-hero">
          <div className="cmx-hero-veil" aria-hidden />
          <div className="cmx-wrap">
            <span className="cmx-hero-tag cms-reveal">✦ EBOSS Pro Claims</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              From submit
              <br />
              <span className="cmx-grad">to payout.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              A complete claims workflow in one place — employees submit with
              receipts, approvers action from a pending queue, and finance pays
              and reports, all with policy-based allocation per role.
            </p>
          </div>
          <div
            className="cmx-hero-stage cms-reveal-scale"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <BrowserMock
              src="/claims/overview.png"
              alt="Claims module — pending queue, approvals and payments"
              label="/admin/claims"
            />
          </div>
          <span className="cmx-scroll-cue" aria-hidden>Scroll</span>
        </header>

        <section className="cmx-section">
          <div className="cmx-wrap">
            <p className="cmx-statement cms-reveal cmx-blur cmx-rise-lg">
              Your daily work centre for claims — action the pending queue,
              approve in a click, and pay {" "}
              <span className="dim">without chasing paper.</span>
            </p>
          </div>
        </section>

        {/* Work centre split */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/claims/overview.png"
                  alt="Claims overview — pending, approved, rejected and paid"
                  label="/admin/claims"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Work Centre</span>
                <h3>Action pending claims in one place.</h3>
                <p>
                  Live totals for pending, approved, rejected and paid — with a
                  pending queue, recent activity and a year summary showing
                  approval rate and average approval time.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Pending queue</h4>
                    <p>Claim ID, claimant, type, amount and days pending.</p>
                  </li>
                  <li>
                    <h4>Live KPIs</h4>
                    <p>Approved, rejected and paid amounts month over month.</p>
                  </li>
                  <li>
                    <h4>Approval insight</h4>
                    <p>Approval rate and average approval time at a glance.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Allocation spotlight */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Allocation &amp; Routing</span>
            <h2 className="cmx-h">Entitlements by division and position</h2>
            <p className="cmx-sub">
              Configure who can claim what — set allocation limits per claim type,
              division and role, so every claim follows policy automatically.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "48px" }}
            >
              <BrowserMock
                badge="● Allocation settings"
                src="/claims/allocation.png"
                alt="Claim allocation by division and position"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Everything in the workflow</span>
            <h2 className="cmx-h">A claims process that runs itself</h2>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={FEATURES} />
          </div>
        </section>

        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Why EBOSS Pro Claims</span>
            <h2 className="cmx-h">Reimbursements, without the friction</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-chips cms-reveal" style={{ marginTop: "36px" }}>
              {WHY.map((w) => (
                <span key={w}>✓ {w}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="cmx-closing">
          <div className="cmx-wrap-narrow cms-reveal">
            <h2>
              One workflow.
              <br />
              <span className="cmx-grad">Every claim, tracked.</span>
            </h2>
            <p>
              Submit, allocate, approve and pay — with a full audit trail and
              analytics finance can trust.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
