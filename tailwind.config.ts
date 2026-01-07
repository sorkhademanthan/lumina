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
        // The background color from the image (very light off-white/cream)
        cream: "#F9F9F7", 
        // The dark button/card color (Deep Indigo/Black)
        "dark-indigo": "#1C1B29",
        // The light purple accent seen in the 3D elements
        "lavender": "#E6E6FA", 
        // Text colors
        "text-main": "#0F0F13",
        "text-muted": "#6B6B78",
      },
      fontFamily: {
        // This hooks up the font we added in layout.tsx
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        // The image uses very rounded corners
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
};
export default config;