const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#14222A",
      white: "#FFF5F0",
      gray: colors.gray,
      primary: {
        100: "#FEDED7",
        300: "#FA9088",
        500: "#9E2B25",
        700: "#6B0D08",
        900: "#411212",
      },
      accent: {
        100: "#FBEDFC",
        300: "#DFC5F9",
        500: "#3A035C",
        700: "#BF8CF3",
        900: "#610F88",
      },
      secondary: {
        900: "#014C3A",
        700: "#068054",
        500: "#08CC86",
        300: "#97F4C7",
        100: "#E7FEF3",
      },
    },
    extend: {},
  },
  plugins: [],
};
