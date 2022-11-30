/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
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
      zIndex: {
        '1': '1',
        '2': '2',
        'header': '100',
        'header-nav': '99',
        'footer': '101',
        'modal': '102',
        'modal2': '103',
        'modal3': '104',
        'overlay': '110',
        'max': '999'
      },
      animation: {
        'spinner-loading': 'spinnerLoading 1.25s infinite backwards',
      },
      keyframes: {
        tick: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        spinnerLoading: {
          "0%": { transform: 'rotate(0deg) translateX(-200%)' },
          "60%, 100%": { transform: 'rotate(360deg) translateX(-200%)' },
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"), // use to truncate text to a fixed number of lines.
    require("@tailwindcss/aspect-ratio"), // give an element a fixed aspect ratio.
    percentageWidth,
    plugin(function ({ matchUtilities, addUtilities, addBase, theme, addVariant, e }) {
      // registering new base styles
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })

      // registering new static utility styles
      addUtilities({
        '.adjust-flex-center': {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })

      // registering custom variants
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('before-after', ['&:before', '&:after'])
      addVariant('not-last', '&:not(:last-child)')
      addVariant('not-first', '&:not(:first-child)')
    })
  ],
}
