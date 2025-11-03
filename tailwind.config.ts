import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cloister': ['"Cloister Black"', 'serif'],
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        background: " #0a0909",
        foreground: "#bcbea8",
        gothRed: "#ba3626"
      },
    },
  },
  plugins: [],
};

export default config;