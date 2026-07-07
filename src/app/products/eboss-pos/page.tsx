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
import FeatureGrid, { type Feature } from "@/components/cms/FeatureGrid";

export const metadata: Metadata = {
  title: "Eboss POS | EBOSSPro",
  description:
    "A fast, smart and modern Point of Sale that connects sales, inventory, customers and reporting in one seamless cloud platform — for retail, F&B, pharmacies and service businesses.",
};

const CHECKOUT: Feature[] = [
  { icon: "📷", title: "Barcode Scanner", desc: "Scan products instantly for lightning-fast billing.", hl: true },
  { icon: "👆", title: "Touch-Screen Friendly", desc: "A tap-optimized interface built for busy counters." },
  { icon: "🔎", title: "Quick Product Search", desc: "Find any item in seconds by name, code or category." },
  { icon: "⚡", title: "Fast Checkout", desc: "Streamlined flow to serve more customers, faster." },
  { icon: "🧾", title: "Receipt Printing", desc: "Print receipts to any connected thermal printer." },
  { icon: "📱", title: "Digital Receipt", desc: "Send paperless receipts by QR, email or message." },
];

const INVENTORY: Feature[] = [
  { icon: "📉", title: "Auto Stock Deduction", desc: "Inventory updates automatically with every sale.", hl: true },
  { icon: "🔔", title: "Low-Stock Alerts", desc: "Get notified before you run out of a product." },
  { icon: "🔁", title: "Stock Transfer", desc: "Move stock between outlets and warehouses." },
  { icon: "🏬", title: "Multi-Warehouse", desc: "Track inventory across multiple locations." },
  { icon: "⚖️", title: "Stock Adjustment", desc: "Reconcile counts with clean, audited adjustments." },
  { icon: "🎨", title: "Product Variants", desc: "Handle sizes, colours and options with ease." },
];

const REPORTING: Feature[] = [
  { icon: "📊", title: "Daily Sales Report", desc: "See exactly how each day performed.", hl: true },
  { icon: "🏆", title: "Product Performance", desc: "Know your best and slow-moving products." },
  { icon: "🧑‍💼", title: "Cashier Performance", desc: "Track sales and activity per cashier." },
  { icon: "💹", title: "Profit Analysis", desc: "Understand margins, not just revenue." },
  { icon: "📈", title: "Sales Trend", desc: "Spot patterns across days, weeks and months." },
  { icon: "🖥️", title: "Real-Time Dashboard", desc: "Live business performance at a glance." },
];

const LOYALTY: Feature[] = [
  { icon: "⭐", title: "Membership", desc: "Sign up and manage members at the counter.", hl: true },
  { icon: "🎁", title: "Reward Points", desc: "Earn and redeem points to drive repeat visits." },
  { icon: "🏷️", title: "Discount Management", desc: "Flexible discounts by item, cart or member." },
  { icon: "📣", title: "Promotion Campaign", desc: "Run time-based promotions and bundles." },
  { icon: "🎟️", title: "Voucher Management", desc: "Issue and redeem vouchers seamlessly." },
  { icon: "🕒", title: "Purchase History", desc: "Every customer's buying history on hand." },
];

const PAYMENTS = [
  "💵 Cash",
  "💳 Debit Card",
  "💳 Credit Card",
  "📱 QR Payment",
  "🏦 FPX",
  "👛 E-Wallet",
];

const WHY = [
  "Fast Billing Experience",
  "Inventory Synchronization",
  "Multi-Outlet Support",
  "Real-Time Sales Analytics",
  "Cloud-Based Access",
  "Mobile Friendly",
];

const BUSINESSES = [
  "Retail Stores",
  "Minimarkets",
  "Cafés",
  "Restaurants",
  "Pharmacies",
  "Service Businesses",
];

export default function EbossPosPage() {
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
          <div className="cmx-wrap cmx-center">
            <span className="cmx-hero-tag cms-reveal">✦ EBOSS Pro POS</span>
            <h1 className="cms-reveal" style={{ "--d": "80ms" } as CSSProperties}>
              Fast, smart &amp; modern
              <br />
              <span className="cmx-grad">point of sale.</span>
            </h1>
            <p
              className="cmx-hero-lead cms-reveal"
              style={{ "--d": "200ms", marginInline: "auto" } as CSSProperties}
            >
              Transform your retail operations with a complete POS that connects
              sales, inventory, customers and reporting in one seamless cloud
              platform.
            </p>
            <div
              className="cmx-chips cms-reveal"
              style={{ "--d": "300ms", justifyContent: "center" } as CSSProperties}
            >
              {BUSINESSES.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
          <span className="cmx-scroll-cue" aria-hidden>Scroll</span>
        </header>

        {/* ════════════ INTRO ════════════ */}
        <section className="cmx-section">
          <div className="cmx-wrap">
            <p className="cmx-statement cms-reveal cmx-blur cmx-rise-lg">
              Sales, stock, customers and reports — one platform at the counter,
              so nothing is {" "}
              <span className="dim">tracked twice or lost.</span>
            </p>
          </div>
        </section>

        {/* ════════════ SMART CHECKOUT ════════════ */}
        <section className="cmx-section" id="pos-checkout">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Smart Checkout</span>
            <h2 className="cmx-h">Serve customers faster</h2>
            <p className="cmx-sub">
              A checkout built for speed — scan, search and settle in seconds.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={CHECKOUT} />
          </div>
        </section>

        {/* ════════════ INVENTORY ════════════ */}
        <section className="cmx-section cmx-panel-soft" id="pos-inventory">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Inventory Integration</span>
            <h2 className="cmx-h">Stock that updates itself</h2>
            <p className="cmx-sub">
              Every sale keeps inventory accurate — across every outlet and
              warehouse.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={INVENTORY} />
          </div>
        </section>

        {/* ════════════ PAYMENTS ════════════ */}
        <section className="cmx-section" id="pos-payments">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Multiple Payment Methods</span>
            <h2 className="cmx-h">Accept the payments your customers prefer</h2>
          </div>
          <div className="cmx-wrap">
            <div
              className="cmx-chips cms-reveal"
              style={{ marginTop: "36px", justifyContent: "center" }}
            >
              {PAYMENTS.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ SALES & REPORTING ════════════ */}
        <section className="cmx-section cmx-panel-soft" id="pos-reporting">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Sales &amp; Reporting</span>
            <h2 className="cmx-h">Know your performance instantly</h2>
            <p className="cmx-sub">
              Real-time dashboards and reports turn every sale into insight.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={REPORTING} />
          </div>
        </section>

        {/* ════════════ CUSTOMER LOYALTY ════════════ */}
        <section className="cmx-section" id="pos-loyalty">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Customer Loyalty</span>
            <h2 className="cmx-h">Turn buyers into regulars</h2>
            <p className="cmx-sub">
              Memberships, points, promotions and vouchers that bring customers
              back.
            </p>
          </div>
          <div className="cmx-wrap" style={{ marginTop: "40px" }}>
            <FeatureGrid features={LOYALTY} />
          </div>
        </section>

        {/* ════════════ WHY POS ════════════ */}
        <section className="cmx-section tight cmx-panel">
          <div className="cmx-wrap cmx-center cms-reveal">
            <span className="cmx-eyebrow">Why EBOSS Pro POS</span>
            <h2 className="cmx-h">Built to sell more, faster</h2>
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
              One counter.
              <br />
              <span className="cmx-grad">Every sale connected.</span>
            </h2>
            <p>
              Checkout, inventory, payments, reporting and loyalty — in one fast,
              cloud-based POS that scales with your business.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
