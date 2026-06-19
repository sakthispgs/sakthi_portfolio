/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        surface: "#14141d",
        "surface-light": "#1b1b27",
        paper: "#f7f7fb",
        "paper-surface": "#ffffff",
        indigo: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
        },
        violet: {
          DEFAULT: "#a855f7",
          light: "#c084fc",
        },
        cyan: {
          DEFAULT: "#38bdf8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -5px rgba(99,102,241,0.45)",
        "glow-violet": "0 0 50px -5px rgba(168,85,247,0.4)",
        card: "0 8px 30px -8px rgba(0,0,0,0.45)",
        "card-light": "0 8px 30px -10px rgba(20,20,40,0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(0.85)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 0.9 },
        },
        drift: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(12px, -10px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        marquee: "marquee var(--marquee-speed, 28s) linear infinite",
      },
    },
  },
  plugins: [],
};
