import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" }, // Opacity as a string
          "100%": { transform: "translateX(0)", opacity: "1" }, // Opacity as a string
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" }, // Opacity as a string
          "100%": { transform: "translateX(100%)", opacity: "0" }, // Opacity as a string
        },
      },
      animation: {
        slideInRight: "slideInRight 0.5s ease-out forwards",
        slideOutRight: "slideOutRight 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
