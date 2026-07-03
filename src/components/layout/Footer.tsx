import Image from "next/image";
import { footerColumns, footerLegal } from "@/data/home";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {footerColumns.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={link === "About Us" ? "/about" : "#"}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <Image
            className="nav-logo-img"
            src="/images/e.png"
            alt="E Logo"
            width={36}
            height={36}
          />
          <div className="footer-legal">
            {footerLegal.map((label) => (
              <a key={label} href="#">
                {label}
              </a>
            ))}
          </div>
          <div className="footer-copy">
            © 2026 EBOSSPro, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
