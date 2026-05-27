import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f6f3",
          100: "#eeece6",
          200: "#dcd8cd",
          300: "#b9b3a3",
          400: "#8a8472",
          500: "#5e5a4e",
          600: "#3f3c34",
          700: "#2a2823",
          800: "#1a1916",
          900: "#111110",
        },
        paper: "#faf8f3",
        accent: "#1c3d5a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
      },
    },
  },
  plugins: [],
};
export default config;
