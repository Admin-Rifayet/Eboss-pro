import "../globals.css";
import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create Account | EBOSSPro",
  description: "Create your free EBOSSPro account — no credit card required.",
};

export default function SignUpPage() {
  return (
    <AuthShell heading="Start building with EBOSSPro today.">
      <SignUpForm />
    </AuthShell>
  );
}
