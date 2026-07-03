import "../../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import IndustrySubNav, {
  type SubNavLink,
} from "@/components/layout/IndustrySubNav";
import IndustryReveal from "@/components/layout/IndustryReveal";
import LegacyPage, {
  type LegacyPageData,
} from "@/components/layout/LegacyPage";
import { industries, industrySlugs } from "@/data/legacy/industries";

// Only the known industry slugs exist; anything else → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = industries[slug];
  if (!entry) return {};
  return { title: entry.title, description: entry.description };
}

/* ── Helpers: lift the sub-nav out of the legacy markup and drop the legacy
   topbar/subnav + their conflicting CSS so the home chrome can take over. ── */

function extractSubNavLinks(html: string): SubNavLink[] {
  const block = html.match(/<div class="subnav">([\s\S]*?)<\/div>\s*<\/div>/);
  if (!block) return [];
  const links: SubNavLink[] = [];
  const re = /<a href="([^"]+)">([^<]+)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(block[1]))) links.push({ href: m[1], label: m[2].trim() });
  return links;
}

function stripLegacyChrome(html: string): string {
  return html
    .replace(/<header class="topbar">[\s\S]*?<\/header>/, "")
    .replace(/<div class="subnav">[\s\S]*?<\/div>\s*<\/div>/, "");
}

/** Remove a top-level CSS rule (by its `selector{…}` block) from the blob. */
function removeRule(css: string, selector: string): string {
  const start = css.indexOf(selector + "{");
  if (start === -1) return css;
  const end = css.indexOf("}", start);
  if (end === -1) return css;
  return css.slice(0, start) + css.slice(end + 1);
}

function cleanLegacyCss(css: string): string {
  // These collide with the home chrome (.topbar / nav) or with the new
  // sub-nav, or globally re-style the page body font/background.
  return ["body", ".topbar", ".brand", ".nav", ".subnav .wrap", ".subnav"].reduce(
    (acc, sel) => removeRule(acc, sel),
    css
  );
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = industries[slug];
  if (!entry) notFound();

  const name = entry.title.split("|")[0].trim();
  const links = extractSubNavLinks(entry.data.html);
  const cleaned: LegacyPageData = {
    css: cleanLegacyCss(entry.data.css),
    html: stripLegacyChrome(entry.data.html),
    script: entry.data.script,
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <MegaMenu />
      <IndustrySubNav name={name} links={links} />
      <LegacyPage data={cleaned} />
      <IndustryReveal />
    </>
  );
}
