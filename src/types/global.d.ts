// The legacy mega-menu / drawer markup (injected via dangerouslySetInnerHTML)
// uses inline handlers such as onclick="toggleMenu(this,'products-panel')".
// Those resolve against functions installed on `window` by useMegaMenu().
// This index signature keeps them type-safe to reference.
export {};

declare global {
  interface Window {
    // Mega-menu engine
    openPanel?: (btn: HTMLElement, panelId: string) => void;
    closeAll?: () => void;
    toggleMenu?: (btn: HTMLElement, panelId: string) => void;
    switchProductCat?: (el: HTMLElement, paneId: string) => void;
    switchSolCat?: (el: HTMLElement, paneId: string) => void;
    solSwitchTop?: (el: HTMLElement, paneId: string) => void;
    solToggleSub?: (el: HTMLElement, paneId: string, subListId: string) => void;
    solSwitchSub?: (el: HTMLElement, paneId: string, subListId: string) => void;
    toggleInstSub?: (el: HTMLElement, paneId: string) => void;
    switchInstSub?: (el: HTMLElement, paneId: string) => void;
    // All-modules drawer
    showAllModules?: (e?: Event) => void;
    closeAllModules?: () => void;
    filterAMD?: (q: string) => void;
    // catch-all for any remaining legacy global handler
    [key: string]: unknown;
  }
}
