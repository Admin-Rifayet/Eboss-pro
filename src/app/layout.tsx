import type { Metadata } from "next";
import MegaPanelAligner from "@/components/layout/MegaPanelAligner";

export const metadata: Metadata = {
  title: "EbossPro — Built Inside. Powered Beyond",
  description:
    "EBOSSPro delivers ERP, AI-powered workflows, and managed digital services to help businesses simplify operations, improve visibility, and grow with confidence.",
  icons: { icon: "/images/e.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* IBM Plex fonts — same families as the legacy site */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MegaPanelAligner />
        {children}
      </body>
    </html>
  );
}
