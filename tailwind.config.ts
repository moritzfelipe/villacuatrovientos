import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F1EA",
          deep: "#EBE6DA",
        },
        ink: {
          DEFAULT: "#2A251C",
          soft: "#5C554A",
          faint: "#8C8477",
        },
        azul: {
          DEFAULT: "#105F9A",
          deep: "#0C4A78",
          wash: "#E3EDF5",
        },
        terra: {
          DEFAULT: "#B05C33",
          deep: "#94481F",
          wash: "#F3E4D8",
        },
        olive: "#7D7B5A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "999px 999px 0 0",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
}

export default config
