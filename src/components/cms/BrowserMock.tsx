import Image from "next/image";
import type { ReactNode } from "react";

/**
 * macOS-style browser chrome wrapping a screenshot (or custom media such as a
 * <video> via `children`). Full-page screenshots are cover-cropped to the top
 * of the page. Optional badge / faint reflection.
 */
export default function BrowserMock({
  src,
  alt,
  label,
  reflection = false,
  badge,
  className,
  children,
  sizes = "(max-width: 920px) 96vw, 1120px",
  quality = 95,
}: {
  src?: string;
  alt?: string;
  label?: string;
  reflection?: boolean;
  badge?: string;
  className?: string;
  children?: ReactNode;
  sizes?: string;
  quality?: number;
}) {
  return (
    <div className={className}>
      <div className="mock">
        <div className="mock-bar">
          <span className="mock-dot r" />
          <span className="mock-dot y" />
          <span className="mock-dot g" />
          <span className="mock-url" />
        </div>
        <div className="mock-screen">
          {badge && <span className="cms-spot-badge">{badge}</span>}
          {label && <span className="mock-label">{label}</span>}
          {children
            ? children
            : src && (
                <Image src={src} alt={alt ?? ""} fill sizes={sizes} quality={quality} />
              )}
        </div>
      </div>
      {reflection && <div className="mock-reflection" aria-hidden />}
    </div>
  );
}
