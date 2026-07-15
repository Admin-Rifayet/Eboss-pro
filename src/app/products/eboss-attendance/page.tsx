import "../../globals.css";
import "../eboss-cms/cms.css";
import "../eboss-cms/demo/demo.css";
import type { Metadata } from "next";
import { Fragment } from "react";
import type { CSSProperties } from "react";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import CmsReveal from "@/components/cms/CmsReveal";
import BrowserMock from "@/components/cms/BrowserMock";
import PhoneMock from "@/components/cms/PhoneMock";
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

const STATS: { num: string; unit: string; label: string }[] = [
  { num: "6", unit: "methods", label: "QR, face-ID, biometric, GPS, web and kiosk — clock in whichever way fits the team." },
  { num: "<1", unit: "second", label: "Contactless face check-in that verifies identity in about a second." },
  { num: "0", unit: "spreadsheets", label: "Hours flow straight into overtime, leave and payroll — no manual tallying." },
];

const FLOW: { ico: string; title: string; body: string }[] = [
  { ico: "📲", title: "Check-in", body: "Staff clock in by face, QR or GPS from the app." },
  { ico: "⏱️", title: "Overtime", body: "Extra hours are captured and calculated automatically." },
  { ico: "🌴", title: "Leave", body: "Approved leave and holidays reconcile the timesheet." },
  { ico: "💵", title: "Payroll", body: "Verified hours feed salary, EPF, SOCSO and payslips." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How can employees clock in and out?",
    a: "Six ways: facial recognition, QR code, existing biometric/fingerprint hardware, GPS-based mobile check-in, a web browser, or a shared kiosk. You choose which methods to enable per branch or department.",
  },
  {
    q: "Does check-in work across multiple branches and shifts?",
    a: "Yes. Attendance is real-time across every branch and location, with multi-shift rosters, grace periods, and public-holiday handling per group — all visible on one live dashboard.",
  },
  {
    q: "How does GPS verification prevent buddy-punching?",
    a: "Mobile check-in is geofenced to the branch radius. Staff must be physically inside the zone — they see an “In Range” status before a check-in is accepted — and every record is location- and time-stamped.",
  },
  {
    q: "Does attendance connect to payroll and leave?",
    a: "It’s one platform. Verified hours and overtime flow directly into EBOSSPro Payroll, while approved leave and holidays reconcile the timesheet automatically — no exports or re-keying.",
  },
  {
    q: "Do we need to buy new hardware?",
    a: "No. Face-ID and QR check-in run on any phone or tablet, and you can connect the fingerprint or biometric devices you already own. A shared device can also act as a kiosk.",
  },
  {
    q: "Is our attendance data secure?",
    a: "Data is encrypted and hosted on a secure cloud platform with role-based access, so managers only see the people and branches they’re responsible for. Reports export to PDF or Excel whenever you need them.",
  },
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
            <div
              className="cmx-actions cms-reveal"
              style={{ "--d": "260ms" } as CSSProperties}
            >
              <a className="cmx-btn primary" href="/signup">
                Start for free <span aria-hidden>→</span>
              </a>
              <a className="cmx-btn" href="#staff-app">
                See the staff app
              </a>
            </div>
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

        {/* ════════════ STATS BAND ════════════ */}
        <section className="cmx-section tight cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">By the numbers</span>
            <h2 className="cmx-h">Attendance that works the way your team does</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-stats">
              {STATS.map((s, i) => (
                <div
                  key={s.unit}
                  className="cmx-stat cms-reveal"
                  style={{ "--d": `${i * 100}ms` } as CSSProperties}
                >
                  <div className="num">
                    {s.num}
                    <small>{s.unit}</small>
                  </div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
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

        {/* ════════════ STAFF MOBILE APP ════════════ */}
        <section className="cmx-section cmx-panel-soft" id="staff-app">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">In Your Team&apos;s Pocket</span>
            <h2 className="cmx-h">Your team clocks in &amp; out from their own phone</h2>
            <p className="cmx-sub">
              No queue at a shared terminal. Every employee checks in, verifies
              their identity and follows their own hours — right from the
              EBOSSPro mobile app.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-phones-wrap cms-reveal-scale">
              <div className="cmx-phones">
                <PhoneMock
                  src="/attendance/staff-checkin.jpeg"
                  alt="Employee clock-in screen with live map, GPS range and today's hours"
                  caption={
                    <>
                      <b>Check in &amp; out</b>
                      <span>
                        A live map, GPS range check and one tap to clock in or
                        out.
                      </span>
                    </>
                  }
                />
                <PhoneMock
                  className="lift"
                  src="/attendance/staff-select.jpeg"
                  alt="Choose Face or QR to verify identity before checking out"
                  caption={
                    <>
                      <b>Pick a method</b>
                      <span>
                        Choose Face or QR to verify identity before it&apos;s
                        recorded.
                      </span>
                    </>
                  }
                />
                <PhoneMock
                  src="/attendance/staff-summary.jpeg"
                  alt="Personal attendance summary with KPI score and daily log"
                  caption={
                    <>
                      <b>Track my own hours</b>
                      <span>
                        A personal KPI score, present/late counts and a full
                        daily log.
                      </span>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ VERIFY METHODS ════════════ */}
        <section className="cmx-section" id="staff-verify">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Verified Check-in</span>
                <h3>Two fast ways to prove it&apos;s really them.</h3>
                <p>
                  Every check-in is identity-verified and GPS-stamped — so the
                  hours in your dashboard are the hours that were actually
                  worked.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Face recognition</h4>
                    <p>
                      A quick face scan confirms identity in about a second — no
                      passwords, no buddy-punching.
                    </p>
                  </li>
                  <li>
                    <h4>QR check-in</h4>
                    <p>
                      Scan a location or shift QR code to clock in when a face
                      scan isn&apos;t ideal.
                    </p>
                  </li>
                  <li>
                    <h4>GPS &amp; geofence</h4>
                    <p>
                      Check-in only counts inside the branch radius — staff see
                      &ldquo;In Range&rdquo; before it&apos;s accepted.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="cmx-split-media cms-reveal-scale">
                <div className="cmx-phone-duo">
                  <PhoneMock
                    src="/attendance/staff-face.png"
                    alt="Face scan check-in screen"
                  />
                  <PhoneMock
                    src="/attendance/staff-qr.png"
                    alt="QR code scan check-in screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ ECOSYSTEM FLOW ════════════ */}
        <section className="cmx-section cmx-panel-soft">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">One connected platform</span>
            <h2 className="cmx-h">From clock-in to payslip, without re-keying</h2>
            <p className="cmx-sub">
              Attendance isn&apos;t an island. Every verified hour flows through
              overtime and leave straight into payroll — one source of truth for
              your whole HR stack.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-flow cmx-flow-4 cms-reveal">
              {FLOW.map((n, i) => (
                <Fragment key={n.title}>
                  <div className="cmx-flow-node">
                    <div className="ico">{n.ico}</div>
                    <h4>{n.title}</h4>
                    <p>{n.body}</p>
                  </div>
                  {i < FLOW.length - 1 && (
                    <div className="cmx-flow-arrow" aria-hidden>
                      →
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">FAQ</span>
            <h2 className="cmx-h">Questions teams ask us</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-faq cms-reveal">
              {FAQ.map((f) => (
                <details className="cmx-faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
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
            <div className="cmx-actions">
              <a className="cmx-btn primary" href="/signup">
                Create a free account <span aria-hidden>→</span>
              </a>
              <a className="cmx-btn" href="/signin">
                Talk to an expert
              </a>
            </div>
            <div className="cmx-trust">
              <span>✓ No credit card required</span>
              <span>✓ ISO 27001 certified</span>
              <span>✓ Free onboarding support</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
