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
  title: "Eboss Payroll | EBOSSPro",
  description:
    "Run monthly payroll with confidence — salary, allowances, deductions and statutory contributions (EPF, SOCSO, EIS, PCB), with payslips, bank files and full analytics.",
};

const FEATURES: Feature[] = [
  { icon: "💵", title: "Salary Processing", desc: "Run monthly payroll for every branch with a guided flow.", hl: true },
  { icon: "➕", title: "Allowances", desc: "Configure fixed and variable earnings per employee." },
  { icon: "➖", title: "Deductions", desc: "Apply deductions and adjustments cleanly and transparently." },
  { icon: "⏱️", title: "Overtime", desc: "Overtime from attendance flows straight into pay." },
  { icon: "🏦", title: "EPF · SOCSO · EIS · PCB", desc: "Statutory contributions calculated automatically." },
  { icon: "🧾", title: "Payslips", desc: "Generate and distribute payslips in a click." },
  { icon: "📤", title: "Bank & Exports", desc: "Export PDF, CSV and bank files ready for upload." },
  { icon: "🔒", title: "Locked Runs & Audit", desc: "Lock committed runs with a complete audit trail." },
];

const WHY = [
  "Accurate Statutory Compliance",
  "Bank-Ready Exports",
  "Attendance-Linked Overtime",
  "Payroll Health Analytics",
  "Locked, Auditable Runs",
  "Cloud Based",
];

export default function EbossPayrollPage() {
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
            <span className="cmx-hero-tag cms-reveal">✦ EBOSS Pro Payroll</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              Run payroll
              <br />
              <span className="cmx-grad">with confidence.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              Salary, allowances, deductions and statutory contributions in one
              guided monthly run — with payslips, bank-ready exports and payroll
              health analytics across every branch.
            </p>
          </div>
          <div
            className="cmx-hero-stage cms-reveal-scale"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <BrowserMock
              src="/payroll/overview.png"
              alt="Payroll overview — run this month's payroll"
              label="/admin/payroll"
            />
          </div>
          <span className="cmx-scroll-cue" aria-hidden>Scroll</span>
        </header>

        <section className="cmx-section">
          <div className="cmx-wrap">
            <p className="cmx-statement cms-reveal cmx-blur cmx-rise-lg">
              One guided run — total payroll, employees and items to review, then
              pay and export {" "}
              <span className="dim">straight to the bank.</span>
            </p>
          </div>
        </section>

        {/* Run overview split */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/payroll/overview.png"
                  alt="Payroll overview — run this month, exports and pay items"
                  label="/admin/payroll"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Monthly Run</span>
                <h3>Everything you need to run this month.</h3>
                <p>
                  Total payroll, employees on payroll, run status and items to
                  review — with quick access to payroll history, pay items and
                  exports for PDF, CSV and bank files.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Guided payroll run</h4>
                    <p>Start, review and commit this month&apos;s payroll.</p>
                  </li>
                  <li>
                    <h4>Bank-ready exports</h4>
                    <p>PDF, CSV and bank files generated for you.</p>
                  </li>
                  <li>
                    <h4>Pay items</h4>
                    <p>Manage earnings and deductions in one place.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Health dashboard spotlight */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Payroll Health</span>
            <h2 className="cmx-h">Trends and totals at a glance</h2>
            <p className="cmx-sub">
              Net paid year-to-date, monthly breakdown, cost-to-company and the
              last few runs — so payroll is never a black box.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "48px" }}
            >
              <BrowserMock
                badge="● Payroll dashboard"
                src="/payroll/health.png"
                alt="Payroll health dashboard — YTD, trends and recent runs"
              />
            </div>
          </div>
        </section>

        {/* Statutory split */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Statutory Reporting</span>
                <h3>EPF, SOCSO, EIS &amp; PCB — sorted.</h3>
                <p>
                  Statutory salary reports break down contributions per employee,
                  month by month, across all branches — ready to review and
                  export for submission.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Per-employee breakdown</h4>
                    <p>Monthly statutory amounts with annual totals.</p>
                  </li>
                  <li>
                    <h4>All branches</h4>
                    <p>Filter and consolidate across the whole company.</p>
                  </li>
                  <li>
                    <h4>Export-ready</h4>
                    <p>Generate reports formatted for submission.</p>
                  </li>
                </ul>
              </div>
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/payroll/statutory.png"
                  alt="Statutory salary report — EPF per employee by month"
                  label="/admin/payroll/statutory"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Built for real payroll</span>
            <h2 className="cmx-h">Everything a monthly run needs</h2>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={FEATURES} />
          </div>
        </section>

        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Why EBOSS Pro Payroll</span>
            <h2 className="cmx-h">Payroll you can trust, every month</h2>
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
              One run.
              <br />
              <span className="cmx-grad">Paid &amp; compliant.</span>
            </h2>
            <p>
              From attendance to bank file — accurate salaries, statutory
              compliance and analytics, all in one place.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
