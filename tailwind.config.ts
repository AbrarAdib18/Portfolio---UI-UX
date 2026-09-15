import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090d",
          900: "#0b0d13",
          800: "#11141c",
          700: "#171b26",
          600: "#232838",
          500: "#333a4d",
        },
        paper: {
          100: "#faf6ee",
          200: "#f1ead9",
          300: "#e4dac2",
          400: "#b9b0a0",
          500: "#8b8577",
        },
        violet: {
          400: "#a48bff",
          500: "#8b6cff",
          600: "#7351e6",
        },
        ember: {
          400: "#ff9a5c",
          500: "#ff7a3d",
          600: "#e6612a",
        },
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "system-ui", "sans-serif"],
        body: ["\"Inter\"", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,108,255,0.25), 0 20px 60px -20px rgba(139,108,255,0.35)",
        card: "0 12px 40px -16px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "orbit-slow": "orbit-spin 40s linear infinite",
        "orbit-slower": "orbit-spin 70s linear infinite reverse",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "drift-slow": "drift 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
