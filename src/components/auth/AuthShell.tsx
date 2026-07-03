import Link from "next/link";
import Image from "next/image";

const FEATURES = [
  "One integrated platform — HR, Finance, Operations, POS & FinTech",
  "LHDN e-Invoicing compliant, built for Malaysian business",
  "Start free, scale anytime — no setup cost, no lock-in",
];

/**
 * Split-screen auth layout: a branded gradient panel on the left and the form
 * (children) on the right. Used by /signin and /signup.
 */
export default function AuthShell({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="auth-wrap">
      {/* Brand panel */}
      <aside className="auth-brand">
        <Link href="/" className="auth-brand-logo">
          <Image src="/images/e.png" alt="EBOSSPro" width={40} height={40} />
          <span className="auth-brand-name">
            EBOSS<span>Pro</span>
          </span>
        </Link>

        <div className="auth-brand-mid">
          <h2>{heading}</h2>
          <ul className="auth-feats">
            {FEATURES.map((f) => (
              <li className="auth-feat" key={f}>
                <span className="auth-feat-ico">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="auth-brand-foot">
          © 2026 EBOSSPro, Inc. · Built Inside. Powered Beyond
        </div>
      </aside>

      {/* Form side */}
      <main className="auth-form-side">
        <div className="auth-card">
          <Link href="/" className="auth-card-logo">
            <Image src="/images/e.png" alt="EBOSSPro" width={34} height={34} />
            <span>
              EBOSS<span>Pro</span>
            </span>
          </Link>
          {children}
        </div>
      </main>
    </div>
  );
}
