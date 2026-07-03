"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="cms-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent && (
        <div className="cms-form-ok">
          ✓ Thanks — we&apos;ll be in touch. (Demo form, not yet connected to a
          backend.)
        </div>
      )}
      <div className="cms-form-row">
        <div>
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" placeholder="you@org.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="cf-org">Organization</label>
        <input id="cf-org" name="org" placeholder="Organization name" />
      </div>
      <div>
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" name="message" placeholder="Tell us what you're building…" />
      </div>
      <button className="cms-btn cms-btn-primary" type="submit" style={{ justifyContent: "center" }}>
        Request a demo
      </button>
    </form>
  );
}
