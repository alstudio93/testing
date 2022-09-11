/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '2px 2px 10px -2px rgb(228, 228, 228)',
      },
      fontSize: {
        'h1': 'clamp(2rem, 7vw, 4rem)',

      },
      fontFamily: {
        'nunito': 'Nunito',
        'quicksand': 'Quicksand'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}