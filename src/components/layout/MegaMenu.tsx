"use client";

import { useMegaMenu } from "@/hooks/useMegaMenu";
import {
  discoverPanelHtml,
  productsPanelHtml,
  allModulesDrawerHtml,
  solutionsPanelHtml,
  pricingPanelHtml,
  resourcesPanelHtml,
} from "@/data/panels";

/**
 * Mega-menu overlay + the five panels and the all-modules drawer.
 *
 * The panel/drawer markup is the legacy HTML, preserved verbatim and rendered
 * via dangerouslySetInnerHTML. Their inline handlers call the window globals
 * installed by useMegaMenu(). The wrapper uses display:contents so it adds no
 * box of its own (panels/overlay are position:fixed and unaffected anyway).
 */
const panelsHtml = [
  discoverPanelHtml,
  productsPanelHtml,
  allModulesDrawerHtml,
  solutionsPanelHtml,
  pricingPanelHtml,
  resourcesPanelHtml,
].join("\n");

export default function MegaMenu({ dark = false }: { dark?: boolean }) {
  useMegaMenu();

  return (
    <>
      <div
        className="mega-overlay"
        id="megaOverlay"
        onClick={() => window.closeAll?.()}
      />
      <div
        className={dark ? "mega-dark" : undefined}
        style={{ display: "contents" }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: panelsHtml }}
      />
    </>
  );
}
