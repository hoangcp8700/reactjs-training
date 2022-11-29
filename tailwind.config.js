/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width');
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xxs: "320px",
        xs: "576px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
      },
      colors: {
        gray: {
          primary: "#A0A5B9",
        },
        black: {
          100: "rgba(0,0,0,0.1)",
          300: "rgba(0,0,0,0.3)",
        },
      },
      keyframes: {
        tick: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    percentageWidth
  ],
}
