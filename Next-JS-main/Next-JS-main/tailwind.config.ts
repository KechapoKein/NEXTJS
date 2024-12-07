import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#00000",
        gray_primary: "#878787",
        gray_secondary: "#BCBCBC",
        blue_category: "#AACAFA",
        orange_category: "#F9DBA1",
        green_category: "#BBFAB5",
      },
      fontFamily: {
        Anaheim: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
