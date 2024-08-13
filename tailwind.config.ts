import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-montserrat)`],
        serif: [`var(--font-ibm-plex-serif)`],
      },
      colors: {
        navy: {
          50: "#F2F2F2",
          100: "#CFD6D9",
          200: "#ABB8C2",
          300: "#8A9CA8",
          400: "#668091",
          500: "#456178",
          600: "#214561",
          700: "#002848",
        },
        pistachio: {
          50: "#FFFFDF",
          100: "#FDFFB6",
          200: "#D8D771",
          300: "#BCBC57",
          400: "#A0A13D",
          500: "#A0A13D",
          600: "#8A8C28",
          700: "#757810",
        },
        ruby: {
          50: "#FFF0E8",
          100: "#F7B4B2",
          200: "#E58882",
          300: "#CA706C",
          400: "#A24D4A",
          500: "#812F2F",
          600: "#4F1D1E",
          700: "#350304",
        },
      },
    },
  },
  plugins: [],
};

export default config;
