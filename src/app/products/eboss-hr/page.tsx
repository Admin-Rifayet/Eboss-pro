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
  title: "Eboss HR | EBOSSPro",
  description:
    "EBOSS Pro Human Resource simplifies attendance, leave, payroll and employee claims into one centralized cloud platform — reduce paperwork, improve productivity and stay compliant.",
};

const ATTENDANCE: Feature[] = [
  { icon: "📱", title: "QR / Face ID Attendance", desc: "Clock in via QR code or facial recognition — fast and contactless.", hl: true },
  { icon: "📍", title: "GPS Location", desc: "Verify employees are on-site when they check in." },
  { icon: "🙂", title: "Face Recognition Ready", desc: "Built for face-based verification out of the box." },
  { icon: "🔐", title: "Biometric Integration", desc: "Connect fingerprint and biometric devices." },
  { icon: "🔁", title: "Shift Management", desc: "Plan and manage complex multi-shift schedules." },
  { icon: "⏱️", title: "Overtime Tracking", desc: "Automatically capture and calculate overtime." },
  { icon: "⏰", title: "Late & Early-Out Monitoring", desc: "Flag lateness and early departures instantly." },
  { icon: "📊", title: "Real-time Dashboard", desc: "Live attendance overview across the whole team." },
];

const LEAVE: Feature[] = [
  { icon: "🌴", title: "Annual Leave", desc: "Configure entitlements, accrual and carry-forward.", hl: true },
  { icon: "🩺", title: "Medical Leave", desc: "Track medical leave with document attachments." },
  { icon: "🚨", title: "Emergency Leave", desc: "Handle urgent leave requests quickly." },
  { icon: "🔄", title: "Replacement Leave", desc: "Manage off-in-lieu and replacement days." },
  { icon: "✅", title: "Multi-Level Approval", desc: "Route requests through approval chains." },
  { icon: "📉", title: "Leave Balance Tracking", desc: "Always-accurate balances for every employee." },
  { icon: "📅", title: "Leave Calendar", desc: "See who's away and plan around it." },
  { icon: "📲", title: "Mobile Application", desc: "Apply for leave from any device, anywhere." },
];

const CLAIM: Feature[] = [
  { icon: "🩺", title: "Medical Claims", desc: "Submit and reimburse medical expenses.", hl: true },
  { icon: "✈️", title: "Travel Claims", desc: "Capture travel expenses with receipts." },
  { icon: "🚗", title: "Mileage Claims", desc: "Auto-calculate mileage reimbursement." },
  { icon: "🛒", title: "Purchase Claims", desc: "Reimburse work-related purchases." },
  { icon: "🧾", title: "Receipt Upload", desc: "Attach receipts directly to each claim." },
  { icon: "✅", title: "Approval Workflow", desc: "Multi-level review and approval." },
  { icon: "📌", title: "Claim Status Tracking", desc: "Follow every claim from submit to payout." },
  { icon: "🗂️", title: "Claim History", desc: "A full, auditable record of all claims." },
];

const PAYROLL: Feature[] = [
  { icon: "💵", title: "Salary Processing", desc: "Run accurate payroll with confidence.", hl: true },
  { icon: "➕", title: "Allowances", desc: "Configure fixed and variable allowances." },
  { icon: "➖", title: "Deductions", desc: "Apply deductions and adjustments cleanly." },
  { icon: "⏱️", title: "Overtime Calculation", desc: "Overtime flows straight into payroll." },
  { icon: "🏦", title: "EPF · SOCSO · EIS · PCB", desc: "Statutory contributions handled automatically." },
  { icon: "🧾", title: "Payslip Generation", desc: "Generate and share payslips instantly." },
  { icon: "📑", title: "Payroll Reports", desc: "Detailed, exportable payroll reporting." },
];

const WHY = [
  "Paperless HR Operations",
  "Employee Self-Service",
  "Faster Approvals",
  "Accurate Payroll",
  "Real-Time Reporting",
  "Cloud Based",
];

export default function EbossHrPage() {
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
            <span className="cmx-hero-tag cms-reveal">✦ EBOSS Pro HR</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              Manage your workforce
              <br />
              <span className="cmx-grad">with confidence.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              Your employees are your greatest asset. EBOSS Pro Human Resource
              brings attendance, leave, payroll and claims into one centralized
              cloud platform — reduce paperwork, improve productivity and stay
              compliant. From 10 employees to 10,000, everything is accessible
              anytime, anywhere.
            </p>
          </div>

          <div
            className="cmx-hero-stage cms-reveal-scale"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <BrowserMock
              src="/hr/staff-profile.png"
              alt="EBOSS Pro HR — employee profile"
              label="/admin/hr"
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
              One platform for the entire employee lifecycle — so HR stops
              chasing forms and{" "}
              <span className="dim">spreadsheets across five tools.</span>
            </p>
          </div>
        </section>

        {/* ════════════ EMPLOYEE PROFILE ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/hr/staff-record.png"
                  alt="Employee records — profiles, documents and history"
                  label="/admin/hr/staff"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Employee Profile</span>
                <h3>Complete records for every employee.</h3>
                <p>
                  Maintain personal details, employment history, departments,
                  documents, qualifications and performance — a single source of
                  truth for your whole workforce.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Full employment history</h4>
                    <p>Roles, departments and milestones on one record.</p>
                  </li>
                  <li>
                    <h4>Documents &amp; qualifications</h4>
                    <p>Store certificates and files against each profile.</p>
                  </li>
                  <li>
                    <h4>Performance ready</h4>
                    <p>Track performance alongside the employee record.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ ATTENDANCE ════════════ */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Attendance Management</span>
            <h2 className="cmx-h">Track attendance accurately, any way you clock in</h2>
            <p className="cmx-sub">
              QR, face ID, GPS and biometrics — with shifts, overtime and a
              real-time dashboard.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "48px" }}
            >
              <BrowserMock
                badge="● Attendance overview"
                src="/hr/attendance.png"
                alt="Attendance dashboard — real-time overview"
              />
            </div>
            <div style={{ marginTop: "44px" }}>
              <FeatureGrid features={ATTENDANCE} />
            </div>
          </div>
        </section>

        {/* ════════════ LEAVE ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Leave Management</span>
            <h2 className="cmx-h">Digitize your leave approval process</h2>
            <p className="cmx-sub">
              Every leave type, balances and multi-level approvals — applied from
              any device.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={LEAVE} />
          </div>
        </section>

        {/* ════════════ CLAIM ════════════ */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Claim Management</span>
                <h3>Simplify reimbursement requests.</h3>
                <p>
                  Medical, travel, mileage and purchase claims — with receipt
                  upload, approval workflow and full status tracking from submit
                  to payout.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Every claim type</h4>
                    <p>Medical, travel, mileage and purchase, all in one place.</p>
                  </li>
                  <li>
                    <h4>Receipts &amp; approvals</h4>
                    <p>Attach receipts and route through approval chains.</p>
                  </li>
                  <li>
                    <h4>Status &amp; history</h4>
                    <p>Track every claim with a full, auditable history.</p>
                  </li>
                </ul>
              </div>
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/hr/claim.png"
                  alt="Claim management — reimbursement requests and approvals"
                  label="/admin/hr/claims"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ PAYROLL ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Payroll</span>
            <h2 className="cmx-h">Process salaries with confidence</h2>
            <p className="cmx-sub">
              Salary, allowances, deductions and statutory contributions (EPF,
              SOCSO, EIS, PCB) — with payslips and reports.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "48px" }}
            >
              <BrowserMock
                badge="● Payroll overview"
                src="/hr/payroll.png"
                alt="Payroll dashboard — salary processing overview"
              />
            </div>
            <div style={{ marginTop: "44px" }}>
              <FeatureGrid features={PAYROLL} />
            </div>
          </div>
        </section>

        {/* ════════════ WHY HR ════════════ */}
        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Why EBOSS Pro HR</span>
            <h2 className="cmx-h">HR that runs itself</h2>
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
              <span className="cmx-grad">Your whole workforce.</span>
            </h2>
            <p>
              Attendance, leave, claims and payroll — paperless, compliant and
              accessible anytime, anywhere.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
