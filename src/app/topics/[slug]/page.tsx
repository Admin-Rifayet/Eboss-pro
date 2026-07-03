import "../../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import LegacyPage, {
  type LegacyPageData,
} from "@/components/layout/LegacyPage";
import ContentReveal from "@/components/layout/ContentReveal";
import { topics, topicSlugs } from "@/data/legacy/topics";

// Only the known topic slugs exist; anything else → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return topicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = topics[slug];
  if (!entry) return {};
  return { title: entry.title, description: entry.description };
}

/* ── Helpers: drop the self-contained legacy chrome (topbar + navbar + the mega
   panels + their script) so the shared home chrome (Topbar/Navbar/MegaMenu)
   takes over and the page matches the homepage exactly. ──

   The legacy markup lays out all chrome (loader, topbar, nav, overlay, every
   mega panel) BEFORE the first content <section>, and all chrome CSS in one
   contiguous block from `.topbar` to `.hero`. So we slice at those boundaries
   rather than enumerating rules. The base reset (*, :root, html, body, a) lives
   before `.topbar`, so it is preserved for the page content. */

function stripLegacyChrome(html: string): string {
  const sec = html.indexOf("<section");
  if (sec === -1) return html;
  // The content sits inside a wrapper `<div class="…-page">` that opens just
  // before the first <section>; its closing </div> is at the very end. Slice at
  // that wrapper (the last <div opening before the section) so the wrapper stays
  // balanced — otherwise the orphan trailing </div> triggers a hydration error.
  const lastDiv = html.slice(0, sec).lastIndexOf("<div");
  return html.slice(lastDiv === -1 ? sec : lastDiv);
}

/** Remove the contiguous chrome CSS block (`.topbar` … just before `.hero`). */
function sliceOutChromeCss(css: string): string {
  const start = css.indexOf(".topbar");
  const hero = css.indexOf(".hero");
  if (start === -1 || hero === -1 || hero <= start) return css;
  return css.slice(0, start) + css.slice(hero);
}

/** Drop any @media block that only restyles the (now-removed) chrome, so the
    legacy responsive nav rules can't override the shared navbar on mobile. */
function removeChromeMediaBlocks(css: string): string {
  const tokens = [".nav-", ".topbar", "mega-", ".disc-", ".mp-", ".ms-", ".btn-nav"];
  let out = "";
  let i = 0;
  while (i < css.length) {
    const at = css.indexOf("@media", i);
    if (at === -1) {
      out += css.slice(i);
      break;
    }
    out += css.slice(i, at);
    const open = css.indexOf("{", at);
    if (open === -1) {
      out += css.slice(at);
      break;
    }
    let depth = 1;
    let j = open + 1;
    for (; j < css.length && depth > 0; j++) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
    }
    const block = css.slice(at, j);
    if (!tokens.some((t) => block.includes(t))) out += block;
    i = j;
  }
  return out;
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = topics[slug];
  if (!entry) notFound();

  const cleaned: LegacyPageData = {
    css: removeChromeMediaBlocks(sliceOutChromeCss(entry.data.css)),
    html: stripLegacyChrome(entry.data.html),
    // The legacy script is purely mega-menu/loader logic, which the shared
    // MegaMenu (useMegaMenu) already provides — drop it to avoid conflicts.
    script: "",
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <MegaMenu />
      <LegacyPage data={cleaned} />
      <ContentReveal />
    </>
  );
}
