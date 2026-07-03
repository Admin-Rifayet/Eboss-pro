import "../globals.css";
import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import SignInForm from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In | EBOSSPro",
  description: "Sign in to your EBOSSPro workspace.",
};

export default function SignInPage() {
  return (
    <AuthShell heading="Welcome back to EBOSSPro.">
      <SignInForm />
    </AuthShell>
  );
}
