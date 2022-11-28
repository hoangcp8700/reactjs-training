/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}"],
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
      boxShadow: {
        primary:
          "-5px 5px 10px rgba(216, 216, 219, 0.2), 5px -5px 10px rgba(216, 216, 219, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(216, 216, 219, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(216, 216, 219, 0.5)",
        primaryInner:
          "1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(216, 216, 219, 0.5), inset -5px 5px 5px rgba(216, 216, 219, 0.2), inset 5px -5px 5px rgba(216, 216, 219, 0.2), inset -5px -5px 5px rgba(255, 255, 255, 0.9), inset 3px 3px 5px rgba(216, 216, 219, 0.9)",
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
  ],
}
