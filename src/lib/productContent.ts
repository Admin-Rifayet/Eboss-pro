import type { Product } from "@/data/products";

/**
 * Category-aware content engine for product detail pages.
 *
 * 203 products would be impractical to hand-write, so each product's page is
 * generated from a domain profile (chosen by its category) blended with its own
 * title and description. Selection is DETERMINISTIC (seeded by the slug) so the
 * static build is stable and each product shows a varied, domain-relevant subset
 * — not identical boilerplate.
 */

export interface Card { title: string; body: string; icon?: string }
export interface Step { title: string; body: string }
export interface Faq { q: string; a: string }
export interface Highlight { stat: string; label: string }

export interface ProductContent {
  domainLabel: string;
  heroIcon: string;
  heroAccent: string; // gradient for the hero visual card
  lead: string;
  keyCapabilities: string[];
  highlights: Highlight[];
  steps: Step[];
  benefits: Card[];
  features: Card[];
  useCases: Card[];
  faqs: Faq[];
}

const clean = (s: string) => s.replace(/&amp;/g, "&");

// One consistent hero-card gradient across ALL product pages, so the color
// doesn't change as you browse from product to product. Cool tones that tie
// into the page's blue/teal/mint backdrop.
const HERO_ACCENT =
  "linear-gradient(140deg,#4f46e5 0%,#3b82f6 45%,#06b6d4 80%,#10b981 100%)";

/* Pull concrete capabilities out of the product's own description, e.g.
   "...via biometric scanner, mobile app, or web browser" → those three items;
   "EPF, SOCSO, EIS, and PCB calculations" → those four. These make each page
   specific to what the product actually does. */
function extractCapabilities(desc: string): string[] {
  const d = clean(desc).replace(/\.$/, "").trim();
  let listPart = d;
  const m = d.match(/\b(?:via|with|covering|including|such as|like|across|for|of|—|-)\b\s+(.+)/i);
  if (m) listPart = m[1];
  let items = listPart
    .split(/,|\band\b|\bor\b|&|\//gi)
    .map((s) => s.trim().replace(/^(the|a|an)\s+/i, ""))
    .map((s) => s.replace(/\s+(calculations?|processing|management|workflows?|tools?|reports?)$/i, "").trim())
    .filter((s) => s.length > 2 && s.split(" ").length <= 5 && /[a-z]/i.test(s));
  // Title-case-ish for short fragments, keep acronyms.
  items = items.map((s) =>
    s.length <= 5 && s === s.toUpperCase() ? s : s.charAt(0).toUpperCase() + s.slice(1)
  );
  return [...new Set(items)].slice(0, 5);
}

/* ── deterministic helpers (no Math.random — keeps SSG output stable) ── */
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function pick<T>(arr: T[], n: number, seed: number): T[] {
  if (arr.length <= n) return arr;
  const start = seed % arr.length;
  const out: T[] = [];
  for (let i = 0; i < n; i++) out.push(arr[(start + i * 3 + (seed % 2)) % arr.length]);
  // de-dup while preserving order
  return out.filter((v, i) => out.indexOf(v) === i).slice(0, n);
}

/* ── domain profiles ── */
type Domain = {
  label: string;
  icon: string;
  accent: string;
  audience: string;
  highlights: Highlight[];
  benefits: Card[];
  features: Card[];
  useCases: Card[];
  steps: (t: string) => Step[];
  faqs: (t: string) => Faq[];
};

const DOMAINS: Record<string, Domain> = {
  workforce: {
    label: "Workforce & Attendance",
    icon: "🕐",
    accent: "linear-gradient(135deg,#1e3a8a,#7c3aed)",
    audience: "HR and operations teams",
    highlights: [
      { stat: "99.9%", label: "Attendance accuracy" },
      { stat: "70%", label: "Less manual admin" },
      { stat: "Real-time", label: "Workforce visibility" },
    ],
    benefits: [
      { icon: "⚡", title: "Eliminate manual tracking", body: "Replace spreadsheets and paper timesheets with automated, tamper-proof records." },
      { icon: "🎯", title: "Improve accuracy", body: "Capture every clock-in, leave day, and exception with a verifiable audit trail." },
      { icon: "📲", title: "Empower employees", body: "Self-service on mobile and web means fewer questions for your HR team." },
      { icon: "🔗", title: "Flows into payroll", body: "Hours, leave, and claims feed straight into EBOSSPro payroll — no re-keying." },
      { icon: "📊", title: "Decisions from data", body: "Spot absenteeism, overtime, and staffing gaps before they affect operations." },
    ],
    features: [
      { title: "Multi-channel capture", body: "Biometric, mobile GPS, QR, and web check-in — choose what fits each site." },
      { title: "Shift & roster planning", body: "Drag-and-drop scheduling with conflict detection and auto-assignment." },
      { title: "Approval workflows", body: "Configurable multi-level approvals with delegation and auto-escalation." },
      { title: "Exception handling", body: "Flag late, early, missed, and overtime events automatically for review." },
      { title: "Policy engine", body: "Encode your attendance, leave, and overtime rules once — applied everywhere." },
      { title: "Real-time dashboards", body: "Live headcount, who's in, who's on leave, by branch and department." },
      { title: "Exportable reports", body: "Daily, weekly, and monthly summaries to PDF/Excel for audit and payroll." },
      { title: "Mobile self-service", body: "Staff apply, check balances, and view schedules from their phones." },
    ],
    useCases: [
      { title: "Multi-branch retail", body: "Standardize attendance across every outlet with centralized oversight." },
      { title: "Shift-based operations", body: "Manage rotating rosters, overtime, and coverage in factories and clinics." },
      { title: "Field & remote teams", body: "GPS-verified check-in keeps mobile and on-site staff accountable." },
      { title: "Growing SMEs", body: "Move off spreadsheets to a system that scales as you hire." },
    ],
    steps: (t) => [
      { title: "Set your rules", body: `Configure shifts, leave types, and approval chains that match your policies for ${t.toLowerCase()}.` },
      { title: "Capture activity", body: "Employees check in and submit requests via mobile, web, or biometric devices." },
      { title: "Automate approvals", body: "Requests route to the right approver with reminders and escalation built in." },
      { title: "Sync to payroll", body: "Verified hours and leave flow into payroll and reporting automatically." },
    ],
    faqs: (t) => [
      { q: `Does ${t} work across multiple branches?`, a: "Yes — manage unlimited branches and departments from one centralized console with role-based access." },
      { q: "Can employees use their own phones?", a: "Yes. The mobile app supports GPS-verified and QR check-in, plus self-service for requests and balances." },
      { q: "Does it integrate with payroll?", a: "It feeds directly into EBOSSPro payroll, so hours, leave, and claims need no manual re-entry." },
      { q: "Is the data auditable?", a: "Every record carries a timestamped, tamper-resistant audit trail for compliance and disputes." },
    ],
  },

  payroll: {
    label: "Payroll & Salary",
    icon: "💵",
    accent: "linear-gradient(135deg,#065f46,#10b981)",
    audience: "finance and HR teams",
    highlights: [
      { stat: "100%", label: "Statutory compliance" },
      { stat: "Minutes", label: "To run payroll" },
      { stat: "Zero", label: "Manual calculations" },
    ],
    benefits: [
      { icon: "✅", title: "Stay compliant", body: "EPF, SOCSO, EIS, and PCB calculated automatically to the latest rates." },
      { icon: "⚡", title: "Run payroll in minutes", body: "Attendance, claims, and adjustments roll into one accurate pay run." },
      { icon: "🔒", title: "Secure & confidential", body: "Role-based access and audit trails protect sensitive salary data." },
      { icon: "🏦", title: "Pay any bank", body: "Generate IBG/DuitNow bank files for direct salary crediting." },
      { icon: "📄", title: "e-Payslips & forms", body: "Auto-generate payslips and statutory forms (EA, CP8D) for staff and authorities." },
    ],
    features: [
      { title: "Automated statutory deductions", body: "EPF, SOCSO, EIS, PCB, and zakat computed and remitted with each run." },
      { title: "Bank file generation", body: "Export IBG/DuitNow payment files ready for upload to your bank." },
      { title: "Payslip distribution", body: "Secure digital payslips delivered to each employee's self-service portal." },
      { title: "Salary revisions", body: "Batch increments and adjustments with approval and effective-date control." },
      { title: "Multi-cycle support", body: "Monthly, bi-weekly, and off-cycle runs for bonuses and arrears." },
      { title: "Payroll analytics", body: "Cost breakdowns by department, branch, and cost centre." },
      { title: "Statutory reporting", body: "Year-end EA forms and CP8D exports generated in one click." },
      { title: "Claims & OT integration", body: "Approved claims and overtime flow straight into the pay run." },
    ],
    useCases: [
      { title: "Multi-entity groups", body: "Run compliant payroll across companies and cost centres from one place." },
      { title: "High-volume workforce", body: "Process hundreds or thousands of employees accurately, on time." },
      { title: "Regulated employers", body: "Meet LHDN and statutory-body requirements with built-in compliance." },
      { title: "Fast-growing SMEs", body: "Automate payroll before headcount outpaces your spreadsheets." },
    ],
    steps: (t) => [
      { title: "Import the data", body: `Attendance, leave, and claims feed automatically into ${t.toLowerCase()}.` },
      { title: "Review the run", body: "Preview gross-to-net with full breakdowns before you approve." },
      { title: "Approve & pay", body: "Generate bank files and remit statutory contributions in one step." },
      { title: "Distribute & file", body: "Publish e-payslips and generate statutory reports automatically." },
    ],
    faqs: (t) => [
      { q: `Is ${t} compliant with Malaysian statutory requirements?`, a: "Yes — EPF, SOCSO, EIS, PCB, and zakat are calculated to the latest published rates and tables." },
      { q: "Can it generate bank payment files?", a: "Yes, it exports IBG/DuitNow files for direct salary crediting at all major banks." },
      { q: "How are payslips delivered?", a: "Secure digital payslips are published to each employee's self-service portal and can be emailed." },
      { q: "Does it handle year-end forms?", a: "EA forms and CP8D exports are generated automatically at year end." },
    ],
  },

  hiring: {
    label: "Recruitment & Talent",
    icon: "🧑‍💼",
    accent: "linear-gradient(135deg,#9d174d,#f43f5e)",
    audience: "talent acquisition teams",
    highlights: [
      { stat: "2x", label: "Faster time-to-hire" },
      { stat: "1 pipeline", label: "All candidates" },
      { stat: "Less", label: "Drop-off" },
    ],
    benefits: [
      { icon: "⚡", title: "Hire faster", body: "Move candidates from application to offer in one streamlined pipeline." },
      { icon: "🔎", title: "Never lose a candidate", body: "Every applicant, note, and stage tracked in a single searchable place." },
      { icon: "🤝", title: "Better collaboration", body: "Hiring managers and recruiters share feedback and decisions in one view." },
      { icon: "🚀", title: "Smooth onboarding", body: "Convert accepted offers into employee records without re-entry." },
      { icon: "📊", title: "Measure your funnel", body: "See conversion, time-in-stage, and source effectiveness at a glance." },
    ],
    features: [
      { title: "Job posting & careers page", body: "Publish openings to a branded careers site and job boards." },
      { title: "Applicant tracking", body: "Kanban pipeline with stages, ratings, and collaborative notes." },
      { title: "Interview scheduling", body: "Coordinate panels and send invites without the back-and-forth." },
      { title: "Offer management", body: "Generate, approve, and track offer letters with e-signature." },
      { title: "Onboarding handoff", body: "Accepted candidates become employee records in one click." },
      { title: "Talent pool", body: "Re-engage past applicants for new roles with smart search." },
      { title: "Hiring analytics", body: "Track time-to-hire, source ROI, and pipeline conversion." },
    ],
    useCases: [
      { title: "High-volume hiring", body: "Manage seasonal and bulk recruitment without losing candidates." },
      { title: "Distributed teams", body: "Coordinate hiring across branches and departments centrally." },
      { title: "Campus & graduate intake", body: "Run structured programmes from application to onboarding." },
      { title: "Growing companies", body: "Build a repeatable hiring process as you scale headcount." },
    ],
    steps: (t) => [
      { title: "Post the role", body: `Publish openings to your careers page and boards through ${t.toLowerCase()}.` },
      { title: "Screen & shortlist", body: "Track applicants through stages with ratings and shared notes." },
      { title: "Interview & decide", body: "Schedule panels and collect structured feedback in one place." },
      { title: "Offer & onboard", body: "Send offers and convert hires into employee records instantly." },
    ],
    faqs: (t) => [
      { q: `Can ${t} post to external job boards?`, a: "Yes — publish to a branded careers page and syndicate to popular job boards." },
      { q: "Does it support collaborative hiring?", a: "Hiring managers and recruiters share ratings, notes, and decisions in a single pipeline view." },
      { q: "What happens after a candidate accepts?", a: "Accepted offers convert directly into onboarding and employee records — no duplicate data entry." },
      { q: "Can we measure hiring performance?", a: "Built-in analytics track time-to-hire, source effectiveness, and funnel conversion." },
    ],
  },

  performance: {
    label: "Performance & KPI",
    icon: "📈",
    accent: "linear-gradient(135deg,#7c2d12,#f59e0b)",
    audience: "managers and people teams",
    highlights: [
      { stat: "Aligned", label: "Goals to outcomes" },
      { stat: "360°", label: "Feedback" },
      { stat: "Fairer", label: "Reviews" },
    ],
    benefits: [
      { icon: "🎯", title: "Align everyone", body: "Cascade company goals to teams and individuals with clear ownership." },
      { icon: "📊", title: "Track what matters", body: "Monitor KPIs in real time instead of waiting for the next review." },
      { icon: "⚖️", title: "Fairer appraisals", body: "Structured, evidence-based reviews reduce bias and disputes." },
      { icon: "💬", title: "Continuous feedback", body: "Ongoing check-ins replace once-a-year surprises." },
      { icon: "🚀", title: "Grow your people", body: "Tie development plans to measured performance gaps." },
    ],
    features: [
      { title: "Goal & OKR tracking", body: "Set, cascade, and monitor objectives across the organization." },
      { title: "KPI dashboards", body: "Real-time scorecards by individual, team, and department." },
      { title: "360° feedback", body: "Collect input from peers, managers, and reports for balanced reviews." },
      { title: "Appraisal cycles", body: "Configurable review periods with templates and weighting." },
      { title: "Calibration", body: "Normalize ratings across teams to keep reviews fair." },
      { title: "Development plans", body: "Link growth actions to identified performance gaps." },
      { title: "Reporting", body: "Trend analysis on performance, potential, and attrition risk." },
    ],
    useCases: [
      { title: "Annual & quarterly reviews", body: "Run structured appraisal cycles without spreadsheets." },
      { title: "Sales & target teams", body: "Track KPIs against targets with live leaderboards." },
      { title: "Large organizations", body: "Calibrate ratings fairly across many managers and teams." },
      { title: "People development", body: "Connect performance data to learning and promotion." },
    ],
    steps: (t) => [
      { title: "Define goals & KPIs", body: `Set objectives and measures in ${t.toLowerCase()} and cascade them down.` },
      { title: "Track progress", body: "Monitor live scorecards and capture continuous feedback." },
      { title: "Run reviews", body: "Conduct structured, evidence-based appraisals on schedule." },
      { title: "Act on results", body: "Calibrate, reward, and build development plans from the data." },
    ],
    faqs: (t) => [
      { q: `Does ${t} support 360° feedback?`, a: "Yes — gather feedback from peers, managers, and direct reports for balanced, fair reviews." },
      { q: "Can goals cascade across teams?", a: "Company objectives cascade to teams and individuals with clear ownership and weighting." },
      { q: "How does it keep reviews fair?", a: "Calibration tools normalize ratings across managers to reduce bias." },
      { q: "Is it real-time?", a: "KPI dashboards update continuously, so you don't wait for the next cycle to see performance." },
    ],
  },

  hr: {
    label: "Human Resources",
    icon: "👥",
    accent: "linear-gradient(135deg,#1e3a8a,#3b82f6)",
    audience: "HR teams",
    highlights: [
      { stat: "One record", label: "Per employee" },
      { stat: "Self-service", label: "For staff" },
      { stat: "Compliant", label: "By design" },
    ],
    benefits: [
      { icon: "🗂️", title: "One source of truth", body: "Every employee record, document, and movement in a single system." },
      { icon: "📲", title: "Employee self-service", body: "Staff update details, apply for leave, and access documents themselves." },
      { icon: "🔒", title: "Compliant & secure", body: "Role-based access and audit trails protect sensitive HR data." },
      { icon: "⚡", title: "Automate the busywork", body: "Onboarding, confirmations, and offboarding run on workflows." },
      { icon: "🔗", title: "Connected suite", body: "Works natively with payroll, attendance, and performance." },
    ],
    features: [
      { title: "Employee database", body: "Complete profiles, documents, and employment history in one place." },
      { title: "Org chart & movements", body: "Track transfers, promotions, and reporting lines visually." },
      { title: "Document management", body: "Store contracts and letters with expiry reminders." },
      { title: "Onboarding & offboarding", body: "Checklists and workflows for every joiner and leaver." },
      { title: "Self-service portal", body: "Staff manage their own details, leave, and claims." },
      { title: "Letters & templates", body: "Generate confirmation, transfer, and HR letters in seconds." },
      { title: "Compliance tracking", body: "Monitor passes, certifications, and document expiries." },
    ],
    useCases: [
      { title: "Centralized HR", body: "Replace scattered files with one secure employee system." },
      { title: "Multi-branch employers", body: "Standardize HR processes across every location." },
      { title: "Scaling teams", body: "Automate onboarding so hiring doesn't overwhelm HR." },
      { title: "Compliance-focused firms", body: "Keep documents, passes, and certifications audit-ready." },
    ],
    steps: (t) => [
      { title: "Centralize records", body: `Bring every employee profile and document into ${t.toLowerCase()}.` },
      { title: "Enable self-service", body: "Let staff manage their own details, leave, and requests." },
      { title: "Automate workflows", body: "Run onboarding, confirmations, and offboarding on autopilot." },
      { title: "Stay compliant", body: "Track document expiries and maintain a full audit trail." },
    ],
    faqs: (t) => [
      { q: `Does ${t} include employee self-service?`, a: "Yes — staff update their details, apply for leave, and access documents from web and mobile." },
      { q: "Is sensitive data protected?", a: "Role-based access controls and audit trails secure all HR information." },
      { q: "Does it connect to payroll?", a: "It shares one employee record with payroll, attendance, and performance — no duplication." },
      { q: "Can it handle multiple branches?", a: "Yes, manage unlimited branches and departments with standardized processes." },
    ],
  },

  finance: {
    label: "Finance & Billing",
    icon: "🧾",
    accent: "linear-gradient(135deg,#0f766e,#22d3ee)",
    audience: "finance teams",
    highlights: [
      { stat: "LHDN", label: "e-Invoice ready" },
      { stat: "Real-time", label: "Cash visibility" },
      { stat: "Faster", label: "Month-end close" },
    ],
    benefits: [
      { icon: "📑", title: "Get paid faster", body: "Automated invoicing, reminders, and reconciliation shorten your cash cycle." },
      { icon: "✅", title: "e-Invoicing compliant", body: "Issue and validate LHDN MyInvois e-invoices straight from billing." },
      { icon: "🔍", title: "Always reconciled", body: "Match payments to invoices automatically and flag discrepancies." },
      { icon: "📊", title: "Clear financial picture", body: "Real-time dashboards on revenue, receivables, and cash flow." },
      { icon: "🔗", title: "Connected ledger", body: "Billing, payments, and accounting stay in sync — no silos." },
    ],
    features: [
      { title: "Invoicing & quotations", body: "Create, send, and track quotes and invoices with templates." },
      { title: "e-Invoicing (MyInvois)", body: "Generate and submit LHDN-compliant e-invoices automatically." },
      { title: "Payment tracking", body: "Record receipts and match them to invoices in real time." },
      { title: "Reconciliation", body: "Auto-match bank statements and surface mismatches." },
      { title: "Recurring billing", body: "Automate subscriptions and scheduled invoices." },
      { title: "Financial reports", body: "P&L, receivables aging, and cash-flow statements on demand." },
      { title: "Multi-currency & tax", body: "Handle SST, multiple currencies, and tax rules correctly." },
    ],
    useCases: [
      { title: "Service businesses", body: "Quote, bill, and collect on projects and retainers." },
      { title: "Subscription models", body: "Automate recurring invoices and dunning." },
      { title: "Multi-entity finance", body: "Consolidate billing and reporting across companies." },
      { title: "LHDN compliance", body: "Meet e-invoicing mandates without extra tools." },
    ],
    steps: (t) => [
      { title: "Set up billing", body: `Configure items, tax, and templates in ${t.toLowerCase()}.` },
      { title: "Issue documents", body: "Send quotes and invoices — e-invoices submit to LHDN automatically." },
      { title: "Collect & reconcile", body: "Track payments and auto-match them to invoices." },
      { title: "Report & close", body: "Generate financial statements and close the period faster." },
    ],
    faqs: (t) => [
      { q: `Is ${t} LHDN e-Invoicing compliant?`, a: "Yes — it generates and submits MyInvois-compliant e-invoices directly from your billing workflow." },
      { q: "Does it reconcile payments automatically?", a: "Payments auto-match to invoices and bank statements, with discrepancies flagged for review." },
      { q: "Can it handle SST and multi-currency?", a: "Yes, tax rules, SST, and multiple currencies are supported out of the box." },
      { q: "Does it connect to accounting?", a: "Billing, payments, and the ledger stay in sync within EBOSSPro — no manual exports." },
    ],
  },

  fintech: {
    label: "FinTech & Payments",
    icon: "💳",
    accent: "linear-gradient(135deg,#4338ca,#06b6d4)",
    audience: "finance and digital teams",
    highlights: [
      { stat: "Digital", label: "Payments built in" },
      { stat: "Secure", label: "By design" },
      { stat: "Instant", label: "Settlement" },
    ],
    benefits: [
      { icon: "💸", title: "Collect digitally", body: "Accept e-wallet, online, and card payments without bolt-on tools." },
      { icon: "🔒", title: "Bank-grade security", body: "Encrypted transactions and full audit trails protect every payment." },
      { icon: "⚡", title: "Faster settlement", body: "Reconcile and settle collections automatically against records." },
      { icon: "📊", title: "Unified view", body: "See every payment channel in one financial dashboard." },
      { icon: "🔗", title: "Embedded everywhere", body: "Payments work across billing, POS, and the marketplace." },
    ],
    features: [
      { title: "Digital wallet", body: "Issue and manage stored-value wallets for customers and staff." },
      { title: "Online payments", body: "Accept FPX, cards, and e-wallets through secure checkout." },
      { title: "Loan & financing tools", body: "Manage installments, schedules, and repayments." },
      { title: "Auto-reconciliation", body: "Match settlements to transactions without manual effort." },
      { title: "Payment analytics", body: "Track volumes, channels, and success rates in real time." },
      { title: "Fraud controls", body: "Rules and alerts to catch suspicious activity early." },
      { title: "Payout management", body: "Schedule and track disbursements to vendors and staff." },
    ],
    useCases: [
      { title: "Marketplaces", body: "Split payments and payouts between buyers, sellers, and platform." },
      { title: "Subscription billing", body: "Automate recurring digital collections." },
      { title: "Retail & POS", body: "Accept cashless payments at every point of sale." },
      { title: "Lending operations", body: "Manage financing products and repayment schedules." },
    ],
    steps: (t) => [
      { title: "Connect channels", body: `Enable the payment methods you need in ${t.toLowerCase()}.` },
      { title: "Collect payments", body: "Customers pay via wallet, FPX, card, or e-wallet securely." },
      { title: "Reconcile automatically", body: "Settlements match to transactions with no manual work." },
      { title: "Analyze & payout", body: "Track performance and disburse funds on schedule." },
    ],
    faqs: (t) => [
      { q: `What payment methods does ${t} support?`, a: "FPX, cards, and major e-wallets, plus stored-value wallets for customers and staff." },
      { q: "How are transactions secured?", a: "Payments are encrypted with full audit trails and rule-based fraud controls." },
      { q: "Does it reconcile automatically?", a: "Settlements match to source transactions automatically, so books stay accurate." },
      { q: "Can it handle payouts?", a: "Yes — schedule and track disbursements to vendors, sellers, and staff." },
    ],
  },

  operations: {
    label: "Operations",
    icon: "📦",
    accent: "linear-gradient(135deg,#374151,#0ea5e9)",
    audience: "operations and store teams",
    highlights: [
      { stat: "Real-time", label: "Stock & assets" },
      { stat: "Fewer", label: "Stockouts" },
      { stat: "Full", label: "Traceability" },
    ],
    benefits: [
      { icon: "📦", title: "Know your stock", body: "Real-time inventory and asset levels across every location." },
      { icon: "⚡", title: "Cut waste & loss", body: "Reorder points and tracking reduce stockouts and shrinkage." },
      { icon: "🛠️", title: "Streamline jobs", body: "Work orders move smoothly from request to completion." },
      { icon: "🔍", title: "Full traceability", body: "Track every item, asset, and movement with an audit trail." },
      { icon: "📊", title: "Plan with data", body: "Usage trends drive smarter purchasing and maintenance." },
    ],
    features: [
      { title: "Stock control", body: "Track quantities, batches, and locations in real time." },
      { title: "Reorder automation", body: "Set min/max levels and auto-generate purchase requests." },
      { title: "Asset register", body: "Tag, depreciate, and track assets through their lifecycle." },
      { title: "Work order management", body: "Create, assign, and track jobs to completion." },
      { title: "Barcode & QR", body: "Scan to receive, issue, and audit inventory and assets." },
      { title: "Maintenance scheduling", body: "Plan preventive maintenance to avoid downtime." },
      { title: "Operations reporting", body: "Stock valuation, usage, and asset utilization reports." },
    ],
    useCases: [
      { title: "Multi-location stock", body: "Manage inventory across warehouses and outlets centrally." },
      { title: "Asset-heavy businesses", body: "Track and maintain equipment across its lifecycle." },
      { title: "Service & repair", body: "Run work orders with parts, labor, and stock usage." },
      { title: "Manufacturing & retail", body: "Keep the right stock at the right place, on time." },
    ],
    steps: (t) => [
      { title: "Set up your catalog", body: `Register items, assets, and locations in ${t.toLowerCase()}.` },
      { title: "Track movement", body: "Scan to receive, issue, transfer, and audit in real time." },
      { title: "Automate replenishment", body: "Reorder points trigger purchase requests automatically." },
      { title: "Optimize with reports", body: "Use usage and valuation data to plan ahead." },
    ],
    faqs: (t) => [
      { q: `Does ${t} support multiple locations?`, a: "Yes — track stock and assets across unlimited warehouses, branches, and outlets." },
      { q: "Can it use barcodes or QR codes?", a: "Scan to receive, issue, transfer, and audit items and assets quickly and accurately." },
      { q: "Does it automate reordering?", a: "Min/max levels trigger purchase requests so you avoid stockouts and overstock." },
      { q: "Is there an audit trail?", a: "Every movement is logged with a full, timestamped audit trail for traceability." },
    ],
  },

  retail: {
    label: "Point of Sale & Retail",
    icon: "🛒",
    accent: "linear-gradient(135deg,#b91c1c,#f59e0b)",
    audience: "retail and F&B operators",
    highlights: [
      { stat: "Seconds", label: "Per checkout" },
      { stat: "Offline", label: "Mode ready" },
      { stat: "Live", label: "Sales data" },
    ],
    benefits: [
      { icon: "⚡", title: "Fast checkout", body: "Sell in seconds with a touch-friendly POS built for busy counters." },
      { icon: "📦", title: "Stock stays accurate", body: "Every sale updates inventory in real time across outlets." },
      { icon: "💳", title: "Accept any payment", body: "Cash, card, and e-wallet — all reconciled automatically." },
      { icon: "🎁", title: "Grow loyalty", body: "Built-in loyalty, promotions, and customer profiles drive repeat sales." },
      { icon: "📊", title: "Know your sales", body: "Live dashboards on sales, top items, and outlet performance." },
    ],
    features: [
      { title: "Touch POS", body: "Fast, intuitive sales screen for retail and F&B." },
      { title: "Offline mode", body: "Keep selling during outages — syncs when back online." },
      { title: "Inventory sync", body: "Stock updates instantly with every transaction." },
      { title: "Payments & split bills", body: "Cash, card, e-wallet, and split-payment support." },
      { title: "Loyalty & promotions", body: "Points, vouchers, and discounts that lift repeat sales." },
      { title: "Multi-outlet management", body: "Centralized pricing, menus, and reporting across stores." },
      { title: "Sales analytics", body: "Real-time and historical reports by outlet, item, and staff." },
    ],
    useCases: [
      { title: "Restaurants & cafés", body: "Take orders, manage tables, and reconcile payments fast." },
      { title: "Retail chains", body: "Standardize pricing and stock across every outlet." },
      { title: "Quick-service", body: "Handle peak rushes with offline-ready, fast checkout." },
      { title: "Franchise operations", body: "Centralized control with per-outlet reporting." },
    ],
    steps: (t) => [
      { title: "Set up your catalog", body: `Add products, prices, and outlets to ${t.toLowerCase()}.` },
      { title: "Start selling", body: "Ring up sales fast, with offline mode when you need it." },
      { title: "Sync everything", body: "Inventory, payments, and loyalty update in real time." },
      { title: "Analyze & grow", body: "Use live sales data to optimize stock and promotions." },
    ],
    faqs: (t) => [
      { q: `Does ${t} work offline?`, a: "Yes — keep selling during internet outages; transactions sync automatically once you're back online." },
      { q: "Does it update inventory in real time?", a: "Every sale adjusts stock instantly across all connected outlets." },
      { q: "What payments are supported?", a: "Cash, cards, and e-wallets, with split bills and automatic reconciliation." },
      { q: "Can it run multiple outlets?", a: "Manage pricing, menus, and reporting across all stores from one console." },
    ],
  },

  crm: {
    label: "CRM & Customer",
    icon: "🤝",
    accent: "linear-gradient(135deg,#6d28d9,#ec4899)",
    audience: "sales and customer teams",
    highlights: [
      { stat: "360°", label: "Customer view" },
      { stat: "More", label: "Deals closed" },
      { stat: "Zero", label: "Lost leads" },
    ],
    benefits: [
      { icon: "🔎", title: "Know every customer", body: "A 360° view of contacts, deals, and history in one place." },
      { icon: "⚡", title: "Close more deals", body: "Visual pipelines and reminders keep every opportunity moving." },
      { icon: "🤖", title: "Automate follow-ups", body: "Tasks, emails, and nudges trigger so nothing slips." },
      { icon: "📊", title: "Forecast accurately", body: "Real-time pipeline and revenue forecasting." },
      { icon: "🔗", title: "Connected to billing", body: "Won deals flow into quotes, invoices, and delivery." },
    ],
    features: [
      { title: "Contact & account management", body: "Centralize every customer, contact, and interaction." },
      { title: "Sales pipeline", body: "Drag-and-drop deal stages with win/loss tracking." },
      { title: "Activity & task automation", body: "Auto-create follow-ups, reminders, and email logs." },
      { title: "Lead capture", body: "Capture leads from web forms and route them automatically." },
      { title: "Quotations", body: "Generate quotes from deals and convert to invoices." },
      { title: "Customer service", body: "Track tickets and requests to resolution." },
      { title: "Sales analytics", body: "Pipeline, conversion, and forecast dashboards." },
    ],
    useCases: [
      { title: "B2B sales teams", body: "Manage long pipelines with multiple stakeholders." },
      { title: "Service businesses", body: "Track leads, quotes, and customer requests end to end." },
      { title: "Growing SMEs", body: "Replace spreadsheets with a real sales system." },
      { title: "Account management", body: "Nurture existing customers for upsell and retention." },
    ],
    steps: (t) => [
      { title: "Capture leads", body: `Bring contacts and inquiries into ${t.toLowerCase()} automatically.` },
      { title: "Work the pipeline", body: "Move deals through stages with tasks and reminders." },
      { title: "Quote & close", body: "Generate quotes and convert won deals to invoices." },
      { title: "Retain & grow", body: "Use the 360° view to upsell and keep customers happy." },
    ],
    faqs: (t) => [
      { q: `Does ${t} give a full customer view?`, a: "Yes — contacts, deals, communications, and service history live in one 360° profile." },
      { q: "Can it automate follow-ups?", a: "Tasks, reminders, and emails trigger automatically so opportunities never go cold." },
      { q: "Does it connect to billing?", a: "Won deals flow straight into quotes and invoices within EBOSSPro." },
      { q: "Is forecasting included?", a: "Real-time pipeline and revenue forecasting dashboards are built in." },
    ],
  },

  commerce: {
    label: "Marketplace & Commerce",
    icon: "🏬",
    accent: "linear-gradient(135deg,#155e75,#10b981)",
    audience: "online sellers and operators",
    highlights: [
      { stat: "Multi-vendor", label: "Ready" },
      { stat: "Unified", label: "Orders & stock" },
      { stat: "Online", label: "Storefront" },
    ],
    benefits: [
      { icon: "🛍️", title: "Sell online fast", body: "Launch a storefront and start taking orders without custom development." },
      { icon: "📦", title: "One stock, all channels", body: "Inventory stays in sync across storefront, POS, and marketplace." },
      { icon: "💳", title: "Built-in payments", body: "Accept digital payments and reconcile automatically." },
      { icon: "🤝", title: "Multi-vendor ready", body: "Onboard sellers, manage commissions, and split payouts." },
      { icon: "📊", title: "See what sells", body: "Order, product, and seller analytics in real time." },
    ],
    features: [
      { title: "Online storefront", body: "Branded catalog and checkout that works on any device." },
      { title: "Order management", body: "Track orders from cart to delivery in one place." },
      { title: "Vendor onboarding", body: "Manage multiple sellers with commissions and payouts." },
      { title: "Inventory sync", body: "Stock updates across all sales channels automatically." },
      { title: "Promotions & vouchers", body: "Run campaigns, discounts, and coupon codes." },
      { title: "Payments & payouts", body: "Collect from buyers and disburse to vendors securely." },
      { title: "Commerce analytics", body: "Sales, product, and vendor performance dashboards." },
    ],
    useCases: [
      { title: "Multi-vendor marketplaces", body: "Run a platform with many sellers and automated payouts." },
      { title: "Omnichannel retail", body: "Unify online and in-store stock and orders." },
      { title: "Brand storefronts", body: "Sell direct with a branded online catalog." },
      { title: "Wholesale & B2B", body: "Offer tiered pricing and bulk ordering." },
    ],
    steps: (t) => [
      { title: "Build your catalog", body: `Add products, pricing, and vendors to ${t.toLowerCase()}.` },
      { title: "Open your store", body: "Launch a branded storefront and accept orders." },
      { title: "Fulfil & reconcile", body: "Manage orders, stock, and payments in one flow." },
      { title: "Grow with data", body: "Use analytics to optimize products and promotions." },
    ],
    faqs: (t) => [
      { q: `Is ${t} multi-vendor capable?`, a: "Yes — onboard multiple sellers, set commissions, and automate payouts." },
      { q: "Does stock sync across channels?", a: "Inventory stays consistent across the storefront, POS, and marketplace." },
      { q: "Are payments built in?", a: "Digital payments are integrated, with automatic reconciliation and vendor payouts." },
      { q: "Can I run promotions?", a: "Create vouchers, discounts, and campaigns directly in the platform." },
    ],
  },

  web: {
    label: "Content & Web",
    icon: "🌐",
    accent: "linear-gradient(135deg,#1d4ed8,#06b6d4)",
    audience: "marketing and web teams",
    highlights: [
      { stat: "No-code", label: "Editing" },
      { stat: "Fast", label: "Publishing" },
      { stat: "SEO", label: "Friendly" },
    ],
    benefits: [
      { icon: "✏️", title: "Update without developers", body: "Edit pages, posts, and media with a no-code editor." },
      { icon: "⚡", title: "Publish in minutes", body: "Draft, preview, and go live without waiting on IT." },
      { icon: "🔍", title: "Built for SEO", body: "Clean markup, metadata, and structure help you rank." },
      { icon: "🔗", title: "Connected content", body: "Tie web content to products, news, and campaigns." },
      { icon: "🔒", title: "Roles & approvals", body: "Control who can edit and publish with workflows." },
    ],
    features: [
      { title: "Page builder", body: "Compose pages from reusable blocks — no code required." },
      { title: "Media library", body: "Organize images and files with reuse across pages." },
      { title: "Publishing workflow", body: "Draft, review, schedule, and publish with approvals." },
      { title: "SEO controls", body: "Manage titles, meta, and clean URLs per page." },
      { title: "Multi-language", body: "Publish content in multiple languages." },
      { title: "Versioning", body: "Roll back to previous versions of any page." },
      { title: "Templates", body: "Reusable layouts keep your site consistent." },
    ],
    useCases: [
      { title: "Corporate websites", body: "Keep your site current without developer bottlenecks." },
      { title: "Campaign pages", body: "Spin up landing pages for promotions quickly." },
      { title: "News & blogs", body: "Publish announcements and articles on a schedule." },
      { title: "Multi-brand sites", body: "Manage several sites or brands from one place." },
    ],
    steps: (t) => [
      { title: "Compose content", body: `Build pages from blocks in ${t.toLowerCase()} — no code needed.` },
      { title: "Review & approve", body: "Route drafts through approval before publishing." },
      { title: "Publish or schedule", body: "Go live instantly or schedule for later." },
      { title: "Optimize", body: "Tune SEO and iterate with versioning safety." },
    ],
    faqs: (t) => [
      { q: `Do I need a developer to use ${t}?`, a: "No — the no-code editor lets your team build and update pages without IT." },
      { q: "Is it SEO-friendly?", a: "Clean markup, editable metadata, and tidy URLs help your pages rank." },
      { q: "Can I control who publishes?", a: "Roles and approval workflows govern who can edit and publish." },
      { q: "Does it support multiple languages?", a: "Yes, you can publish and manage content in several languages." },
    ],
  },

  education: {
    label: "Education Management",
    icon: "🎓",
    accent: "linear-gradient(135deg,#5b21b6,#2563eb)",
    audience: "schools and institutions",
    highlights: [
      { stat: "One system", label: "Whole campus" },
      { stat: "Parents", label: "Connected" },
      { stat: "Less", label: "Paperwork" },
    ],
    benefits: [
      { icon: "🎓", title: "Run the whole campus", body: "Students, finance, attendance, and staff in one connected system." },
      { icon: "👪", title: "Engage parents", body: "Keep families informed with portals, alerts, and statements." },
      { icon: "💳", title: "Simplify fees", body: "Automated fee billing, reminders, and online payment." },
      { icon: "📊", title: "Insight on students", body: "Track attendance, grades, and progress in real time." },
      { icon: "⚡", title: "Cut paperwork", body: "Digitize enrollment, records, and communication." },
    ],
    features: [
      { title: "Student information system", body: "Central records for enrollment, classes, and history." },
      { title: "Fee management", body: "Automated billing, reminders, and online payments." },
      { title: "Attendance & timetable", body: "Track attendance and manage class schedules." },
      { title: "Grades & assessment", body: "Record results and generate report cards." },
      { title: "Parent & student portal", body: "Self-service access to schedules, fees, and results." },
      { title: "Staff & payroll", body: "Manage teachers, HR, and payroll in the same system." },
      { title: "Communication", body: "Announcements, alerts, and messaging to families." },
    ],
    useCases: [
      { title: "Schools & academies", body: "Manage the full student lifecycle in one platform." },
      { title: "Kindergartens & tadika", body: "Track young learners, fees, and parent communication." },
      { title: "Tuition & training centres", body: "Schedule classes, track attendance, and bill fees." },
      { title: "Colleges & universities", body: "Handle complex programmes, fees, and records at scale." },
    ],
    steps: (t) => [
      { title: "Enroll students", body: `Digitize enrollment and central records in ${t.toLowerCase()}.` },
      { title: "Run daily operations", body: "Manage attendance, timetables, grades, and staff." },
      { title: "Bill & collect fees", body: "Automate fee invoicing, reminders, and online payment." },
      { title: "Engage families", body: "Share progress, schedules, and statements via portals." },
    ],
    faqs: (t) => [
      { q: `Does ${t} cover the whole institution?`, a: "Yes — students, fees, attendance, grades, staff, and communication in one connected system." },
      { q: "Can parents access information?", a: "A parent and student portal provides self-service access to schedules, fees, and results." },
      { q: "How are fees handled?", a: "Fee billing, reminders, and online payments are automated to reduce admin and arrears." },
      { q: "Does it suit small centres too?", a: "It scales from kindergartens and tuition centres up to colleges and universities." },
    ],
  },

  // Industry-vertical fallback (Strata, NGO, Masjid, Healthcare, Service Centers,
  // Corporate, Professional Firm, etc.). Leans on the product's own description.
  vertical: {
    label: "Industry Solution",
    icon: "🏢",
    accent: "linear-gradient(135deg,#0f1b2d,#3b82f6)",
    audience: "organizations in your sector",
    highlights: [
      { stat: "All-in-one", label: "Operations" },
      { stat: "Tailored", label: "To your sector" },
      { stat: "Connected", label: "Across teams" },
    ],
    benefits: [
      { icon: "🧩", title: "One connected platform", body: "Run operations, finance, and people management in a single system." },
      { icon: "⚡", title: "Automate the routine", body: "Replace manual processes with configurable workflows." },
      { icon: "📊", title: "Decisions from data", body: "Real-time dashboards give leaders a clear operational picture." },
      { icon: "🔒", title: "Secure & compliant", body: "Role-based access and audit trails protect your data." },
      { icon: "📈", title: "Scale with confidence", body: "Grow from one site to many without re-platforming." },
    ],
    features: [
      { title: "Centralized records", body: "Keep members, customers, and operations data in one place." },
      { title: "Workflow automation", body: "Configurable approvals, reminders, and escalations." },
      { title: "Finance & billing", body: "Invoicing, payments, and reconciliation built in." },
      { title: "Reporting & dashboards", body: "Real-time visibility across the organization." },
      { title: "Role-based access", body: "Give each team exactly the access they need." },
      { title: "Mobile & web", body: "Work from anywhere on any device." },
      { title: "Integrations & API", body: "Connect EBOSSPro to your existing tools." },
    ],
    useCases: [
      { title: "Multi-site organizations", body: "Standardize operations across every location." },
      { title: "Lean back-offices", body: "Do more with less by automating admin." },
      { title: "Compliance-driven sectors", body: "Maintain audit-ready records and controls." },
      { title: "Growing operations", body: "Add capacity and modules as your needs grow." },
    ],
    steps: (t) => [
      { title: "Configure for your sector", body: `Set up ${t.toLowerCase()} to match how your organization works.` },
      { title: "Centralize operations", body: "Bring records, finance, and workflows into one system." },
      { title: "Automate & approve", body: "Run day-to-day processes on configurable workflows." },
      { title: "Measure & improve", body: "Use real-time dashboards to make better decisions." },
    ],
    faqs: (t) => [
      { q: `Is ${t} tailored to my industry?`, a: "Yes — it's configured for your sector's workflows while staying part of the integrated EBOSSPro platform." },
      { q: "Can it scale across multiple sites?", a: "Manage unlimited locations and teams from one centralized console." },
      { q: "Is my data secure?", a: "Role-based access controls and full audit trails protect sensitive information." },
      { q: "Does it connect to other modules?", a: "It shares data natively with HR, finance, operations, and FinTech in EBOSSPro." },
    ],
  },
};

const DOMAIN_BY_CATEGORY: Record<string, keyof typeof DOMAINS> = {
  Attendance: "workforce", Leave: "workforce", Claim: "workforce",
  Salary: "payroll",
  Recruitment: "hiring",
  KPI: "performance", Appraisal: "performance",
  "Human Resource": "hr",
  Finance: "finance", Billing: "finance", "e-Invoicing": "finance",
  Fintech: "fintech",
  Inventory: "operations", Asset: "operations", Workorder: "operations",
  POS: "retail", "POS System": "retail", Retails: "retail",
  CRM: "crm",
  Marketplace: "commerce",
  CMS: "web",
  Education: "education", Institutions: "education",
};

export function getProductContent(p: Product): ProductContent {
  const t = clean(p.title);
  const desc = clean(p.desc);
  const category = clean(p.category);
  const domainKey = DOMAIN_BY_CATEGORY[p.category] ?? "vertical";
  const d = DOMAINS[domainKey];
  const seed = hash(p.slug);

  const descSentence = /[.!?]$/.test(desc) ? desc : desc + ".";
  const lead =
    `${descSentence} ${t} is part of EBOSSPro's ${d.label.toLowerCase()} suite — it ` +
    `removes the manual work from this process and keeps everything connected to HR, ` +
    `Finance, Operations, and FinTech, so ${d.audience} work from a single source of truth.`;

  // Key capabilities: lead with what THIS product does, then concrete items
  // pulled from its description, topped up with closely-related capabilities.
  const extracted = extractCapabilities(desc);
  const filler = pick(d.features, 4, seed + 21).map((f) => f.title);
  const keyCapabilities = [...new Set([...extracted, ...filler])].slice(0, 5);

  // A feature card built directly from the product's own description.
  const specificFeature: Card = {
    title: t,
    body: descSentence,
  };
  const features = [specificFeature, ...pick(d.features, 5, seed + 7)];

  // Product-specific FAQs first, then domain FAQs.
  const faqs: Faq[] = [
    { q: `What is ${t}?`, a: `${t} is EBOSSPro's ${d.label.toLowerCase()} module for ${category.toLowerCase()}. ${descSentence}` },
    ...d.faqs(t).slice(0, 3),
  ];

  return {
    domainLabel: d.label,
    heroIcon: d.icon,
    heroAccent: HERO_ACCENT,
    lead,
    keyCapabilities,
    highlights: d.highlights,
    steps: d.steps(t),
    benefits: pick(d.benefits, 4, seed),
    features,
    useCases: pick(d.useCases, 3, seed + 13),
    faqs,
  };
}
