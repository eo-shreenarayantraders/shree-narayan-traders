import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          900: "var(--color-brand-900)",
          800: "var(--color-brand-800)",
          700: "var(--color-brand-700)",
          600: "var(--color-brand-600)",
          500: "var(--color-brand-500)",
          400: "var(--color-brand-400)",
          300: "var(--color-brand-300)",
        },
        accent: {
          500: "var(--color-accent-500)",
          400: "var(--color-accent-400)",
          300: "var(--color-accent-300)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          900: "var(--color-neutral-900)",
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
