import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#0E8A4A",
          dark: "#0A6B3A"
        },
        yellow: {
          DEFAULT: "#FDB813",
          dark: "#E29E00"
        },
        navy: {
          DEFAULT: "#06283D",
          light: "#0A3550"
        },
        paper: "#FBFAF6",
        ink: {
          DEFAULT: "#0A2216",
          soft: "#41544C"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        num: ["var(--font-num)"]
      },
      backgroundImage: {
        emerald: "linear-gradient(135deg, #0E8A4A 0%, #0A6B3A 55%, #06283D 100%)",
        gold: "linear-gradient(120deg, #FDB813 0%, #E29E00 100%)",
        sun: "conic-gradient(from 200deg, #FDB813, #0E8A4A, #06283D, #FDB813)"
      },
      keyframes: {
        spin30: {
          to: { transform: "translateY(-50%) rotate(360deg)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      },
      animation: {
        spin30: "spin30 40s linear infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
