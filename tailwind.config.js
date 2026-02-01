const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        dark: "#7a1215",
        DEFAULT: "#b02b2e",
        light: "#d9534f",
      },
      red: "#b02b2e",
      burgundy: "#3f0f12",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        header: ["var(--font-cinzel)"],
        crimson: ["var(--font-crimson-text)"],
        metamorphous: ["var(--font-metamorphous)"],
        ebGaramond: ["var(--font-eb-garamond)"],
      },
    },
  },
  plugins: [],
};
