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
        medical: {
          blue: "#0a3d62",
          light: "#1e6899",
        },
        accent: {
          green: "#27ae60",
        }
      },
    },
  },
  plugins: [],
};
export default config;
