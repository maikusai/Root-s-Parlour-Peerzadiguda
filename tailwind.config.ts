import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "salon-black": "#0D0D1A",
        "salon-surface": "#1A1A2E",
        "salon-gold": "#C9A84C",
        "salon-gold-light": "#E8D5A3",
        "salon-cream": "#F5F0E8",
        "salon-muted": "#A89F8C",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
export default config;
