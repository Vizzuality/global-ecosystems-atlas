import tailwindCSStypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindCSSanimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "3xs": ["0.5rem", { lineHeight: "1.5" }],
        "2xs": ["0.625rem", { lineHeight: "1.5" }],
        xs: ["0.75rem", { lineHeight: "1.75", letterSpacing: "0.14px" }],
        sm: ["0.875rem", { lineHeight: "1.75", letterSpacing: "0.14px" }],
        base: ["1rem", { lineHeight: "1.75", letterSpacing: "0.2px" }],
        lg: ["1.125rem", { lineHeight: "1.75" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.2px" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "0.3px" }],
        "4xl": ["2.25rem", { lineHeight: "1.5", letterSpacing: "0.36px" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "0.6px" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "0.6px" }],
        "7xl": ["4.5rem", { lineHeight: "1.2", letterSpacing: "0.72px" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-ibm-plex-serif)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        lightblue: {
          50: "#EFF8FF",
          100: "#D9EEFF",
        },
        navy: {
          10: "#F9FAFC",
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
        alert: {
          50: "#FEFBDF",
          800: "#FEE92E",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindCSSanimate, tailwindCSStypography],
} satisfies Config;

export default config;
