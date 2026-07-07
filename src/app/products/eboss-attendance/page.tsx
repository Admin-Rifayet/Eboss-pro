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
  title: "Eboss Attendance | EBOSSPro",
  description:
    "Real-time attendance across every branch — QR & face-ID check-in, GPS verification, shifts, overtime and a live dashboard, all in one cloud platform.",
};

const CAPTURE: Feature[] = [
  { icon: "📱", title: "QR & Face-ID Check-in", desc: "Contactless clock-in by QR code or facial recognition on any device.", hl: true },
  { icon: "📍", title: "GPS Verification", desc: "Confirm employees are on-site with location-restricted check-in." },
  { icon: "🔐", title: "Biometric Integration", desc: "Connect fingerprint and biometric hardware you already own." },
  { icon: "🔁", title: "Shift Management", desc: "Plan multi-shift rosters across branches and departments." },
  { icon: "⏱️", title: "Overtime Tracking", desc: "Capture and calculate overtime automatically as it happens." },
  { icon: "⏰", title: "Late & Early-Out Alerts", desc: "Flag late arrivals and early departures past the grace period." },
  { icon: "🌴", title: "Leave-Aware", desc: "Leave and public holidays flow straight into the attendance view." },
  { icon: "⬆️", title: "Import & Export", desc: "Upload device logs and export reports to PDF or Excel." },
];

const WHY = [
  "Real-Time Across All Branches",
  "Multiple Check-in Methods",
  "Accurate Overtime Capture",
  "Exception Alerts",
  "Exportable Reports",
  "Cloud Based",
];

export default function EbossAttendancePage() {
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
            <span className="cmx-hero-tag cms-reveal">✦ EBOSS Pro Attendance</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              Know who&apos;s in,
              <br />
              <span className="cmx-grad">in real time.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              A live view of attendance across every branch — QR and face-ID
              check-in, GPS verification, shifts and overtime, with a real-time
              dashboard and instant exception alerts.
            </p>
          </div>
          <div
            className="cmx-hero-stage cms-reveal-scale"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <BrowserMock
              src="/attendance/overview.png"
              alt="Attendance overview — live dashboard across all branches"
              label="/admin/attendance"
            />
          </div>
          <span className="cmx-scroll-cue" aria-hidden>Scroll</span>
        </header>

        <section className="cmx-section">
          <div className="cmx-wrap">
            <p className="cmx-statement cms-reveal cmx-blur cmx-rise-lg">
              Present, absent, late or on leave — see it all at a glance, the
              moment it happens, {" "}
              <span className="dim">across your entire organization.</span>
            </p>
          </div>
        </section>

        {/* Live overview split */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/attendance/overview.png"
                  alt="Attendance overview — KPIs, live status and trends"
                  label="/admin/attendance"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Live Overview</span>
                <h3>Today&apos;s attendance, at a glance.</h3>
                <p>
                  Total staff, present, on-time, absent, late and on-leave — with
                  a live donut, a 7-day trend and an attention list of everything
                  that needs review.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Live status</h4>
                    <p>Who&apos;s in right now, updated in real time.</p>
                  </li>
                  <li>
                    <h4>Needs attention</h4>
                    <p>Absences, late arrivals and exceptions surfaced for you.</p>
                  </li>
                  <li>
                    <h4>Quick actions</h4>
                    <p>Bulk-mark, generate reports and import device logs.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Status matrix spotlight */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Detailed Status Matrix</span>
            <h2 className="cmx-h">Every employee, every day, in one grid</h2>
            <p className="cmx-sub">
              A weekly matrix showing present, late, overtime, leave, absent and
              public holidays per employee — filter by status, location or group.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "48px" }}
            >
              <BrowserMock
                badge="● Attendance matrix"
                src="/attendance/matrix.png"
                alt="Employee attendance detailed status matrix"
              />
            </div>
          </div>
        </section>

        {/* Capture features */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Capture &amp; Control</span>
            <h2 className="cmx-h">Clock in any way that fits your workforce</h2>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={CAPTURE} />
          </div>
        </section>

        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Why EBOSS Pro Attendance</span>
            <h2 className="cmx-h">Attendance without the guesswork</h2>
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
              One dashboard.
              <br />
              <span className="cmx-grad">Every branch, live.</span>
            </h2>
            <p>
              Accurate attendance that feeds straight into leave, overtime and
              payroll — no spreadsheets, no manual tallying.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
