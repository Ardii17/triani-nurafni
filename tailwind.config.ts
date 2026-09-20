import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FBFAF6",
          dim: "#F3F0E7",
        },
        ledger: {
          line: "#E4DFD0",
        },
        navy: {
          950: "#050F1F",
          900: "#0A1B33",
          800: "#11274A",
          700: "#1A3661",
          600: "#254A82",
        },
        ink: {
          900: "#0E1420",
          700: "#3A4152",
          500: "#666E7E",
          300: "#A7ADB9",
        },
        gold: {
          600: "#A9821B",
          500: "#C9A227",
          400: "#DAB94E",
          300: "#E8D18C",
        },
        balance: {
          600: "#1F5B3F",
          500: "#2F6F4E",
          400: "#3F8B63",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "ledger-rules":
          "repeating-linear-gradient(to bottom, transparent, transparent 35px, var(--tw-ledger-line, #E4DFD0) 36px)",
      },
      boxShadow: {
        stamp: "0 1px 0 rgba(0,0,0,0.02)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        tally: {
          "0%": { width: "0%" },
          "100%": { width: "var(--tally-w, 100%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        tally: "tally 1.1s cubic-bezier(0.16,1,0.3,1) both",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
