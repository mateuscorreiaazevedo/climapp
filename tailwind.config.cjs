/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat Alternates', 'sans-serif']
    },
    fontWeight: {
      bold: 600
    },
    extend: {},
  },
  plugins: [],
}
