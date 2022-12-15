/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tour-green': '#04ddb2'
      },
      fontFamily: {
        'sans': ['Lab Grotesque', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
