"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <h1 className="auth-h1">Create your free account</h1>
      <p className="auth-sub">
        Get full platform access — no credit card required, no setup cost.
      </p>

      {submitted && (
        <div className="auth-success">
          ✓ Demo only — account creation isn&apos;t connected to a backend yet.
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="auth-field">
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" placeholder="Your name" required />
        </div>
        <div className="auth-field">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" placeholder="Company name" required />
        </div>
        <div className="auth-field">
          <label htmlFor="email">Work email</label>
          <input id="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            minLength={8}
            required
          />
        </div>

        <label className="auth-check auth-terms">
          <input type="checkbox" required /> I agree to the{" "}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </label>

        <button className="auth-btn" type="submit">
          Create account
        </button>
      </form>

      <p className="auth-foot">
        Already have an account? <Link href="/signin">Sign in</Link>
      </p>
    </>
  );
}
