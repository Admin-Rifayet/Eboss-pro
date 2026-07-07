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

export const metadata: Metadata = {
  title: "Eboss Recruitment | EBOSSPro",
  description:
    "An AI-assisted recruitment platform — a public applicant portal and an admin studio with a Kanban hiring board, AI fit scoring, and form builder, engineered as one system.",
};

/* Stages of the applicant-tracking board */
const BOARD_STEPS = [
  {
    t: "Submitted → Offered",
    d: "Drag applications across Submitted, Under Review, Shortlisted, Interviewed, and Offered — the status updates instantly.",
  },
  {
    t: "Filter by branch & form",
    d: "Scope the board to any branch or posting, then switch between board, list, and comparison views.",
  },
  {
    t: "One source of truth",
    d: "Every applicant, remark, score, and document lives on one record the whole panel sees.",
  },
];

export default function EbossRecruitmentPage() {
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
            <span className="cmx-hero-tag cms-reveal">✦ Eboss Recruitment</span>
            <h1
              className="cms-reveal"
              style={{ "--d": "80ms" } as CSSProperties}
            >
              One portal.
              <br />
              One studio.
              <br />
              <span className="cmx-grad">AI-ranked hiring.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms" } as CSSProperties}
            >
              A public applicant portal and a recruiter studio, built as a
              single platform — so candidates apply in minutes and your team
              hires from one AI-assisted pipeline.
            </p>
          </div>

          <div
            className="cmx-hero-stage cms-reveal-scale"
            style={{ "--d": "320ms" } as CSSProperties}
          >
            <BrowserMock
              src="/recruitment/dashboard.png"
              alt="Recruitment dashboard — applications, trends, and pipeline"
              label="/admin/recruitment"
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
              Meet Eboss Recruitment — an applicant portal and a hiring studio,
              built as one platform so candidates and recruiters are never
              working against{" "}
              <span className="dim">two disconnected systems.</span>
            </p>
          </div>
        </section>

        {/* ════════════ STAGE 1 — the applicant portal (image + caption) ════════════ */}
        <section className="cmx-section tight cmx-panel" id="rec-portal">
          <div className="cmx-wrap">
            <div className="cmx-stage cms-reveal-scale cmx-clip">
              <BrowserMock
                src="/recruitment/portal-home.png"
                alt="Applicant Portal — browse jobs, apply, check status"
                label="/portal"
              />
            </div>
            <div className="cmx-cap cms-reveal">
              <h3>The portal your candidates actually use</h3>
              <p>
                A clean public portal where applicants browse open positions,
                submit an application, or check the status of an existing one —
                no account, no friction.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════ SPLIT — Admin studio / dashboard (image + details) ════════════ */}
        <section className="cmx-section" id="rec-studio">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/recruitment/dashboard.png"
                  alt="Recruitment admin dashboard"
                  label="/admin/recruitment"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">Recruiter Studio</span>
                <h3>The whole funnel, at a glance</h3>
                <p>
                  Total applications, weekly intake, open postings and
                  everything in the pipeline — with an applications trend chart
                  and status mix, right on the dashboard.
                </p>
                <ul className="cmx-points">
                  <li>
                    <h4>Live pipeline metrics</h4>
                    <p>
                      Total applications, this week, open postings, and how many
                      are awaiting a decision.
                    </p>
                  </li>
                  <li>
                    <h4>Trends &amp; status mix</h4>
                    <p>
                      Daily applications over the last 30 days and a breakdown
                      of every application by status.
                    </p>
                  </li>
                  <li>
                    <h4>Multi-branch &amp; multi-language</h4>
                    <p>
                      Scoped to a branch and locale, with a polished dark mode
                      across the entire studio.
                    </p>
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
            <h2 className="cmx-h">A complete hiring workflow</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-stats">
              <div className="cmx-stat cms-reveal">
                <div className="num">
                  5<small>stages</small>
                </div>
                <div className="lbl">
                  From Submitted to Offered on a drag-and-drop applications
                  board.
                </div>
              </div>
              <div
                className="cmx-stat cms-reveal"
                style={{ "--d": "100ms" } as CSSProperties}
              >
                <div className="num">
                  AI<small>fit score</small>
                </div>
                <div className="lbl">
                  Every applicant ranked against the role on skills, experience
                  and more.
                </div>
              </div>
              <div
                className="cmx-stat cms-reveal"
                style={{ "--d": "200ms" } as CSSProperties}
              >
                <div className="num">
                  3<small>views</small>
                </div>
                <div className="lbl">
                  Board, list and comparison — review applicants whichever way
                  fits.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SPOTLIGHT — Applications board (image + steps) ════════════ */}
        <section className="cmx-section" id="rec-board">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Spotlight</span>
            <h2 className="cmx-h">A hiring board recruiters actually enjoy</h2>
            <p className="cmx-sub">
              Move candidates through the pipeline visually — drag between
              columns to change status, with instant feedback.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "56px" }}
            >
              <BrowserMock
                badge="● Applications board"
                src="/recruitment/applications-board.jpeg"
                alt="Applications board — drag applicants between status columns"
              />
            </div>
            <div className="cmx-stats" style={{ marginTop: "44px" }}>
              {BOARD_STEPS.map((s, i) => (
                <div
                  key={s.t}
                  className="cmx-stat cms-reveal"
                  style={
                    {
                      "--d": `${i * 100}ms`,
                      textAlign: "left",
                      padding: "30px 28px",
                    } as CSSProperties
                  }
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      margin: "0 0 8px",
                    }}
                  >
                    {s.t}
                  </h4>
                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ AI — candidate fit score (image + details) ════════════ */}
        <section className="cmx-section cmx-panel-soft" id="rec-ai">
          <div className="cmx-wrap">
            <div className="cmx-split">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <div className="cmx-ai-media">
                  <span className="cmx-ai-badge">✦ AI</span>
                  <BrowserMock
                    src="/recruitment/candidate-ai.png"
                    alt="AI insights and fit score for a candidate"
                    label="/admin/recruitment/applicant"
                  />
                </div>
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">✦ AI Agent inside</span>
                <span className="cmx-prompt">
                  “Score this resume against the role”
                </span>
                <h3>AI insights and a fit score for every applicant</h3>
                <p>
                  A working agent reads each resume and writes the strengths and
                  weaknesses, then computes an AI Fit Score across skills,
                  experience, education and stability — so the strongest people
                  rise to the top of the list automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ AI — list with generated scores (image + details, flipped) ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <div className="cmx-split flip">
              <div className="cmx-split-media cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/recruitment/applications-list.png"
                  alt="Applications list with AI-generated scores and filters"
                  label="/admin/recruitment/applications"
                />
              </div>
              <div
                className="cmx-split-text cms-reveal cmx-blur"
                style={{ "--d": "120ms" } as CSSProperties}
              >
                <span className="cmx-eyebrow">✦ AI Agent inside</span>
                <span className="cmx-prompt">
                  “Generate scores for everyone”
                </span>
                <h3>Rank the whole shortlist in one click</h3>
                <p>
                  Generate scores across every applicant at once, then sort and
                  filter by branch, form or status — and jump into a
                  side-by-side comparison when two candidates are close.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ FORM BUILDER (image + caption) ════════════ */}
        <section className="cmx-section cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Form builder</span>
            <h2 className="cmx-h">Post a role in minutes</h2>
            <p className="cmx-sub">
              Build each posting visually — details, dates, a description with
              AI assist, and the attachments the AI ranker uses to evaluate.
            </p>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-stage cms-reveal-scale cmx-clip"
              style={{ marginTop: "48px" }}
            >
              <BrowserMock
                src="/recruitment/form-builder.png"
                alt="Application form builder with AI assist and required resume attachment"
                label="/admin/recruitment/forms"
              />
            </div>
          </div>
        </section>

        {/* ════════════ PORTAL FLOW — apply + check status ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Candidate experience</span>
            <h2 className="cmx-h">Apply, then track — no account needed</h2>
            <p className="cmx-sub">
              Candidates pick a posting and apply with an IC number, then return
              any time to check exactly where their application stands.
            </p>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-themes">
              <div className="cmx-theme cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/recruitment/job-list.png"
                  alt="Open positions on the applicant portal"
                  label="/portal/jobs"
                />
                <div className="cmx-theme-name">
                  Browse jobs <span>— every open position</span>
                </div>
              </div>
              <div
                className="cmx-theme cms-reveal-scale cmx-clip"
                style={{ "--d": "100ms" } as CSSProperties}
              >
                <BrowserMock
                  src="/recruitment/apply.png"
                  alt="Apply by selecting a form and entering an IC number"
                  label="/portal/apply"
                />
                <div className="cmx-theme-name">
                  Apply <span>— pick a form, enter your IC</span>
                </div>
              </div>
              <div className="cmx-theme cms-reveal-scale cmx-clip">
                <BrowserMock
                  src="/recruitment/check-status.png"
                  alt="Check application status by IC number"
                  label="/portal/status"
                />
                <div className="cmx-theme-name">
                  Check status <span>— track your application</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ ARCHITECTURE ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">How it flows</span>
            <h2 className="cmx-h">From applicant to offer</h2>
          </div>
          <div className="cmx-wrap">
            <div className="cmx-flow cms-reveal">
              <div className="cmx-flow-node">
                <div className="ico">🌐</div>
                <h4>Applicant Portal</h4>
                <p>Candidates browse, apply, and track status</p>
              </div>
              <div className="cmx-flow-arrow">→</div>
              <div className="cmx-flow-node">
                <div className="ico">🤖</div>
                <h4>AI Ranking</h4>
                <p>Resumes parsed and scored against the role</p>
              </div>
              <div className="cmx-flow-arrow">→</div>
              <div className="cmx-flow-node">
                <div className="ico">🗂️</div>
                <h4>Hiring Board</h4>
                <p>Recruiters move candidates to an offer</p>
              </div>
            </div>
            <div className="cmx-chips cms-reveal">
              {[
                "Applicant Portal",
                "Applications Board",
                "AI Fit Score",
                "Form Builder",
                "Branch & form filters",
                "Status tracking",
                "Multi-branch + i18n",
              ].map((s) => (
                <span key={s}>{s}</span>
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
              <span className="cmx-grad">Better hires.</span>
            </h2>
            <p>
              A recruiter studio that&apos;s genuinely pleasant to run, and a
              candidate experience that feels designed — not bolted together.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
