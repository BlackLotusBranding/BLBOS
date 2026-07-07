import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lotusBlack: "#090708",
        softBlack: "#161314",
        darkBrown: "#2B1D1A",
        roseGold: "#C69A88",
        softRose: "#E7C6BE",
        ivory: "#F8F8F8"
      },
      boxShadow: {
        lotus: "0 20px 60px rgba(198, 154, 136, 0.12)"
      }
    },
  },
  plugins: [],
};

export default config;
