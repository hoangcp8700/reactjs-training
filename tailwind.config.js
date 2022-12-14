/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// const percentageWidth = require('tailwindcss-percentage-width');
const { fontFamily } = require("tailwindcss/defaultTheme");

const screens = {
  xxs: "320px",
  xs: "576px",
  sm: "768px",
  md: "991px",
  lg: "1200px",
  xl: "1440px",
}

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/containers/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      screens,

      colors: {
        gray: {
          primary: "#A0A5B9",
        },
        black: {
          100: "rgba(0,0,0,0.1)",
          300: "rgba(0,0,0,0.3)",
        },
      },
      backgroundImage: {
        'skeleton': "linear-gradient(90deg,rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%,  rgba(190, 190, 190, 0.2) 63%)",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.red.900"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.blue.700"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),

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
        'skeleton': 'skeleton 1.4s ease infinite',
      },
      keyframes: {
        tick: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        spinnerLoading: {
          "0%": { transform: 'rotate(0deg) translateX(-120%)' },
          "60%, 100%": { transform: 'rotate(360deg) translateX(-120%)' },
        },
        skeleton: {
          '0%': { transform: 'translate(-37.5%)' },
          '100%': { transform: 'translate(37.5%)' },
        }
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"), // use to truncate text to a fixed number of lines.
    // percentageWidth,
    plugin(function ({ matchUtilities, addUtilities, addBase, theme, addVariant, e }) {
      // registering new base styles
      // registering new base styles
      addBase({
        "h1,h2": {
          fontWeight: 700,
          letterSpacing: theme("letterSpacing.tight"),
        },
        h3: {
          fontWeight: 600,
        },
        a: {
          textDecoration: "none!important",
        },
      });

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
      addVariant('not-disabled', '&:not(:disabled)')
    })
  ],
}
