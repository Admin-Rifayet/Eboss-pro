"use client";

import { useEffect } from "react";

/**
 * Installs the legacy mega-menu / all-modules-drawer engine on `window`.
 *
 * The five mega panels and the drawer are rendered as verbatim legacy markup
 * (see src/data/panels/*). Their inline handlers — onclick="toggleMenu(...)",
 * onclick="switchProductCat(...)", etc. — call the globals defined here, exactly
 * as on the original site, so behavior is identical. Logic is ported 1:1 from
 * the original index2.php inline script.
 */
export function useMegaMenu() {
  useEffect(() => {
    let activePanel: HTMLElement | null = null;

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        window.closeAll?.();
        window.closeAllModules?.();
      }
    }

    const openPanel = (btn: HTMLElement, panelId: string) => {
      const panel = document.getElementById(panelId);
      if (!panel) return;
      activePanel = panel;
      panel.style.display = "flex";
      document.getElementById("megaOverlay")?.classList.add("open");
      btn.classList.add("active");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => panel.classList.add("open"))
      );
      document.addEventListener("keydown", onEsc);
    };

    const closeAll = () => {
      document.querySelectorAll(".mega-panel").forEach((p) => {
        p.classList.remove("open");
        setTimeout(() => {
          if (!p.classList.contains("open"))
            (p as HTMLElement).style.display = "none";
        }, 220);
      });
      document
        .querySelectorAll(".nav-btn")
        .forEach((b) => b.classList.remove("active"));
      document.getElementById("megaOverlay")?.classList.remove("open");
      activePanel = null;
      document.removeEventListener("keydown", onEsc);
    };

    const toggleMenu = (btn: HTMLElement, panelId: string) => {
      const panel = document.getElementById(panelId);
      if (!panel) return;
      const isOpen = panel.classList.contains("open");
      closeAll();
      if (!isOpen) openPanel(btn, panelId);
    };

    /* Products sidebar */
    const switchProductCat = (el: HTMLElement, paneId: string) => {
      // Close institutions sub-list when another top-level item is clicked
      document.getElementById("inst-sub-list")?.classList.remove("open");
      document.getElementById("inst-parent-cat")?.classList.remove("sub-open");
      document
        .querySelectorAll(".mp-sub-item")
        .forEach((s) => s.classList.remove("active"));
      document
        .querySelectorAll("#prod-sidebar .mp-cat")
        .forEach((c) => c.classList.remove("active"));
      el.classList.add("active");
      document
        .querySelectorAll("#products-panel .mp-pane")
        .forEach((p) => p.classList.remove("active"));
      document.getElementById(paneId)?.classList.add("active");
    };

    /* Solutions sidebar */
    const switchSolCat = (el: HTMLElement, paneId: string) => {
      document
        .querySelectorAll("#solutions-panel .ms-cat")
        .forEach((c) => c.classList.remove("active"));
      el.classList.add("active");
      document
        .querySelectorAll("#solutions-panel .ms-pane")
        .forEach((p) => p.classList.remove("active"));
      document.getElementById(paneId)?.classList.add("active");
    };

    const solSwitchTop = (el: HTMLElement, paneId: string) => {
      document.querySelectorAll("#sol-sidebar .mp-sub-list").forEach((sl) => {
        sl.classList.remove("open");
        const pc = sl.previousElementSibling as HTMLElement | null;
        if (pc) {
          pc.classList.remove("sub-open");
          const a = pc.querySelector(".sol-ind-arr") as HTMLElement | null;
          if (a) a.style.transform = "";
        }
      });
      document
        .querySelectorAll("#sol-sidebar .mp-sub-item")
        .forEach((s) => s.classList.remove("active"));
      document
        .querySelectorAll("#sol-sidebar .mp-cat")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll("#solutions-panel .mp-pane")
        .forEach((p) => p.classList.remove("active"));
      el.classList.add("active");
      document.getElementById(paneId)?.classList.add("active");
    };

    const solToggleSub = (
      el: HTMLElement,
      paneId: string,
      subListId: string
    ) => {
      const subList = document.getElementById(subListId);
      const arr = el.querySelector(".sol-ind-arr") as HTMLElement | null;
      const isOpen = subList?.classList.contains("open");
      document.querySelectorAll("#sol-sidebar .mp-sub-list").forEach((sl) => {
        if (sl.id !== subListId) {
          sl.classList.remove("open");
          const pc = sl.previousElementSibling as HTMLElement | null;
          if (pc) {
            pc.classList.remove("sub-open");
            const a = pc.querySelector(".sol-ind-arr") as HTMLElement | null;
            if (a) a.style.transform = "";
          }
        }
      });
      if (!isOpen) {
        subList?.classList.add("open");
        el.classList.add("sub-open");
        if (arr) arr.style.transform = "rotate(90deg)";
        document
          .querySelectorAll("#sol-sidebar .mp-cat")
          .forEach((c) => c.classList.remove("active"));
        document
          .querySelectorAll("#solutions-panel .mp-pane")
          .forEach((p) => p.classList.remove("active"));
        el.classList.add("active");
        document.getElementById(paneId)?.classList.add("active");
      } else {
        subList?.classList.remove("open");
        el.classList.remove("sub-open");
        if (arr) arr.style.transform = "";
      }
    };

    const solSwitchSub = (
      el: HTMLElement,
      paneId: string,
      subListId: string
    ) => {
      document
        .querySelectorAll("#sol-sidebar .mp-cat")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll("#sol-sidebar .mp-sub-item")
        .forEach((s) => s.classList.remove("active"));
      document
        .querySelectorAll("#solutions-panel .mp-pane")
        .forEach((p) => p.classList.remove("active"));
      const subList = document.getElementById(subListId);
      const pc = subList?.previousElementSibling as HTMLElement | null;
      if (pc) pc.classList.add("active");
      el.classList.add("active");
      document.getElementById(paneId)?.classList.add("active");
    };

    /* Institutions sub-menu (Products panel) */
    const toggleInstSub = (el: HTMLElement, paneId: string) => {
      const subList = document.getElementById("inst-sub-list");
      const isOpen = subList?.classList.contains("open");
      if (!isOpen) {
        subList?.classList.add("open");
        el.classList.add("sub-open");
        document
          .querySelectorAll(".mp-cat")
          .forEach((c) => c.classList.remove("active"));
        document
          .querySelectorAll(".mp-sub-item")
          .forEach((s) => s.classList.remove("active"));
        document
          .querySelectorAll(".mp-pane")
          .forEach((p) => p.classList.remove("active"));
        el.classList.add("active");
        document.getElementById(paneId)?.classList.add("active");
      } else {
        subList?.classList.remove("open");
        el.classList.remove("sub-open");
      }
    };

    const switchInstSub = (el: HTMLElement, paneId: string) => {
      document
        .querySelectorAll(".mp-cat")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll(".mp-sub-item")
        .forEach((s) => s.classList.remove("active"));
      document
        .querySelectorAll(".mp-pane")
        .forEach((p) => p.classList.remove("active"));
      document.getElementById("inst-parent-cat")?.classList.add("active");
      el.classList.add("active");
      document.getElementById(paneId)?.classList.add("active");
    };

    /* All-modules drawer */
    const showAllModules = (e?: Event) => {
      e?.preventDefault();
      const drawer = document.getElementById("all-modules-drawer");
      if (drawer) drawer.style.display = "block";
      document.body.style.overflow = "hidden";
      const s = document.getElementById("amd-search") as HTMLInputElement | null;
      if (s) {
        s.value = "";
        filterAMD("");
      }
    };
    const closeAllModules = () => {
      const drawer = document.getElementById("all-modules-drawer");
      if (drawer) drawer.style.display = "none";
      document.body.style.overflow = "";
    };
    const filterAMD = (q: string) => {
      const term = q.trim().toLowerCase();
      document.querySelectorAll(".amd-group").forEach((group) => {
        let anyVisible = false;
        group.querySelectorAll(".amd-item").forEach((item) => {
          const text = (item.textContent || "").toLowerCase();
          const show = !term || text.includes(term);
          (item as HTMLElement).style.display = show ? "" : "none";
          if (show) anyVisible = true;
        });
        (group as HTMLElement).style.display = anyVisible ? "" : "none";
      });
    };

    // Outside-click closes the open panel (matches original)
    const onDocClick = (e: MouseEvent) => {
      if (!activePanel) return;
      const target = e.target as HTMLElement;
      if (!activePanel.contains(target) && !target.closest(".nav-btn"))
        closeAll();
    };

    // Install on window
    Object.assign(window, {
      openPanel,
      closeAll,
      toggleMenu,
      switchProductCat,
      switchSolCat,
      solSwitchTop,
      solToggleSub,
      solSwitchSub,
      toggleInstSub,
      switchInstSub,
      showAllModules,
      closeAllModules,
      filterAMD,
    });
    document.addEventListener("click", onDocClick);

    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);
}
