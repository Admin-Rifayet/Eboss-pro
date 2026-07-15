import Image from "next/image";
import type { ReactNode } from "react";

/**
 * A realistic phone device frame wrapping a full-screen mobile screenshot.
 * The screenshots already include their own status bar / notch, so the frame
 * is just a dark bezel with rounded corners — no synthetic notch on top.
 */
export default function PhoneMock({
  src,
  alt,
  caption,
  className,
  sizes = "(max-width: 640px) 78vw, 300px",
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={["cmx-phone", className].filter(Boolean).join(" ")}>
      <div className="cmx-phone-frame">
        <span className="cmx-phone-glare" aria-hidden />
        <Image src={src} alt={alt} fill sizes={sizes} quality={95} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
