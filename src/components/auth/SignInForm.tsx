"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <h1 className="auth-h1">Sign in to your account</h1>
      <p className="auth-sub">
        Welcome back. Enter your details to access your EBOSSPro workspace.
      </p>

      {submitted && (
        <div className="auth-success">
          ✓ Demo only — sign-in isn&apos;t connected to a backend yet.
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="auth-field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" required />
        </div>

        <div className="auth-row">
          <label className="auth-check">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button className="auth-btn" type="submit">
          Sign in
        </button>
      </form>

      <div className="auth-divider">or</div>
      <button className="auth-sso" type="button" onClick={() => setSubmitted(true)}>
        <span aria-hidden>🔐</span> Continue with SSO
      </button>

      <p className="auth-foot">
        New to EBOSSPro? <Link href="/signup">Create an account</Link>
      </p>
    </>
  );
}
