/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#eff6ff",
        },
        gold: {
          DEFAULT: "#ca8a04",
          light: "#fef9c3",
        },
        foreground: "#0f172a",
        muted: "#64748b",
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
