/* "One platform" — a premium bento-grid showcase of the EBOSSPro ecosystem
   (Applied AI, all-in-one ERP, Managed Services) interwoven with the trust
   stats and certifications from the corporate profile. Varied cell sizes,
   gradient surfaces and subtle motion give the home page a modern, high-end
   feel. Cells reveal on scroll via the shared `.sr` engine. */

const modules = [
  "Finance & Billing",
  "HR & Payroll",
  "CRM & Sales",
  "Inventory",
  "Attendance",
  "Reporting",
];

export default function PlatformBento() {
  return (
    <section className="bento-section">
      <div className="container">
        <div className="bento-head">
          <span className="bento-kicker">One platform</span>
          <h2 className="section-title">
            Everything your business runs on — connected.
          </h2>
          <p className="section-sub">
            ERP, Applied AI and Managed Services in a single cloud ecosystem,
            built inside and powered beyond.
          </p>
        </div>

        <div className="bento-grid">
          {/* Hero cell — Applied AI */}
          <div className="bento-card bento-ai sr" style={{ transitionDelay: "0s" }}>
            <div className="bento-ai-orb" aria-hidden>
              <span className="bento-ai-ring" />
              <span className="bento-ai-ring r2" />
              <span className="bento-ai-core">✦</span>
            </div>
            <div className="bento-ai-body">
              <span className="bento-tag">Applied AI</span>
              <h3>Smarter workflows. Faster decisions.</h3>
              <p>
                AI built into the platform — automate repetitive work, surface
                insights and turn operational data into action.
              </p>
            </div>
          </div>

          {/* ERP modules */}
          <div className="bento-card bento-erp sr" style={{ transitionDelay: ".08s" }}>
            <span className="bento-tag">All-in-one ERP</span>
            <h3>Run every department from one place.</h3>
            <div className="bento-chips">
              {modules.map((m) => (
                <span className="bento-chip" key={m}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Stat — customers */}
          <div className="bento-card bento-stat sr" style={{ transitionDelay: ".16s" }}>
            <div className="bento-stat-num">1,000+</div>
            <div className="bento-stat-label">Businesses nationwide</div>
          </div>

          {/* Stat — institutions */}
          <div className="bento-card bento-stat sr" style={{ transitionDelay: ".24s" }}>
            <div className="bento-stat-num">2,000+</div>
            <div className="bento-stat-label">Educational institutions</div>
          </div>

          {/* Managed services */}
          <div className="bento-card bento-managed sr" style={{ transitionDelay: ".32s" }}>
            <span className="bento-tag light">Managed Services</span>
            <h3>We can run it for you.</h3>
            <p>
              Setup, monitoring, hosting and reconciliation handled by our team
              — so yours can focus on the business.
            </p>
          </div>

          {/* Security / certification */}
          <div className="bento-card bento-secure sr" style={{ transitionDelay: ".4s" }}>
            <span className="bento-secure-badge" aria-hidden>
              🛡️
            </span>
            <h3>ISO 27001</h3>
            <p>Certified information-security management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
