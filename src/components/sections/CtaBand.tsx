export default function CtaBand() {
  return (
    <section className="cta-band">
      <span className="cta-glow" aria-hidden />
      <div className="cta-panel">
        <span className="cta-eyebrow sr" style={{ transitionDelay: "0s" }}>
          Ready when you are
        </span>
        <h2 className="sr" style={{ transitionDelay: ".08s" }}>
          Start for free.{" "}
          <span className="cta-grad">Scale without limits.</span>
        </h2>
        <p className="sr" style={{ transitionDelay: ".16s" }}>
          No credit card required. Get full platform access and dedicated
          onboarding support to explore every module.
        </p>
        <div className="cta-row sr" style={{ transitionDelay: ".24s" }}>
          <button className="cta-btn-primary">
            Create a free account <span aria-hidden>→</span>
          </button>
          <button className="cta-btn-ghost">Talk to an expert</button>
        </div>
        <div className="cta-trust sr" style={{ transitionDelay: ".32s" }}>
          <span>✓ No credit card required</span>
          <span>✓ ISO 27001 certified</span>
          <span>✓ Trusted by 1M+ users</span>
        </div>
      </div>
    </section>
  );
}
