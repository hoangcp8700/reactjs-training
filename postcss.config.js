module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {},
      //  reduce the file size is to remove any unrequired styles from the final CSS file.
      '@fullhuman/postcss-purgecss': {
        content: [
          './containers/**/*.{ts,tsx}',
          './components/**/*.{ts,tsx}',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    } : {}),
  },
}
