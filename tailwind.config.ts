import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    // Breakpoints of the design: narrow < 600, wide ≥ 900, extra wide ≥ 1080.
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1080px",
    },
    extend: {
      colors: {
        paper: "#f8f7f4",
        ink: "#242422",
        muted: "#646461",
        rule: "#d6d5cf",
        mist: "#eeede8",
        faint: "#aaa",
        char: "#343633",
      },
      fontFamily: {
        serif: ["var(--font-literata)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
