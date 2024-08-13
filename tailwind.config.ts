import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-montserrat)`],
        serif: [`var(--font-ibm-plex-serif)`],
      },
    },
  },
  plugins: [],
};

export default config;
