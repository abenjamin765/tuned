import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#1A1A1A",
        emerald: "#1F6B4A",
        gold: "#C4A35A",
        navy: "#1B2A4A",
        mist: "#E8E6E1",
        muted: "#6B6B66",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        brand: "0.18em",
        tightish: "-0.02em",
      },
      maxWidth: {
        prose: "42rem",
        shell: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
