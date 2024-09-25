import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      transitionTimingFunction:{
        "custom" :'cubic-bezier(.76,-0.01,.22,1)'
      },
      colors: {
        primary: "#6C5CE7",
        primaryHover: "#A29BFE",
        secondary: "#FDCB6E",
        tertiary: "#2D3436",
        accent: "#55EFC4",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config