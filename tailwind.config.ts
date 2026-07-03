import type { Config } from "tailwindcss";

/**
 * Tailwind is enabled per the migration brief, but the legacy site ships ~1,200
 * lines of bespoke CSS that we preserve verbatim in globals.css for pixel
 * fidelity. The brand tokens below mirror the original palette so any *new*
 * Tailwind-based UI stays on-brand. We disable preflight to avoid clobbering
 * the legacy reset/styles.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#4842cb",
          violet: "#6a3de8",
          indigo: "#2d1b69",
          night: "#080f1e",
          ink: "#0a1423",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
