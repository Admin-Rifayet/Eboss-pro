import Link from "next/link";
import { topbarLinks } from "@/data/home";

// Map the relevant topbar items to real routes; others stay as placeholders.
const HREF: Record<string, string> = {
  "My Account": "/signin",
};

export default function Topbar() {
  return (
    <div className="topbar">
      {topbarLinks.map((label) => {
        const href = HREF[label];
        return href ? (
          <Link key={label} href={href}>
            {label}
          </Link>
        ) : (
          <a key={label} href="#">
            {label}
          </a>
        );
      })}
    </div>
  );
}
