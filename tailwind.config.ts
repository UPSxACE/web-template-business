import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "t-black": "#121212",
        "t-gray": "#f0f0f0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      height: {
        header: "var(--header-height)",
        landing: "var(--landing-height)",
      },
      minHeight: {
        header: "var(--header-height)",
        landing: "var(--landing-height)",
      },
      maxHeight: {
        header: "var(--header-height)",
        landing: "var(--landing-height)",
      },
    },
  },
  plugins: [animate],
};
export default config;
