import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f4ee",
          100: "#ece8dc",
          200: "#d8d2c0",
          300: "#b3ab93",
          400: "#857d65",
          500: "#5a5343",
          600: "#3c372c",
          700: "#27241d",
          800: "#181612",
          900: "#0e0d0a",
        },
        paper: "#f7f4ec",
        paperDeep: "#efeadd",
        accent: {
          DEFAULT: "#1f3a52",
          ink: "#142838",
          warm: "#a8552a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
        tighter3: "-0.035em",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
export default config;
