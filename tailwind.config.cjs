/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Montserrat Alternates', 'sans-serif']
    },
    extend: {
      fontWeight: {
        bold: 600
      },
      height: {
        '80%': '80vh'
      },
      colors: {
        primary: '#FECA6F',
        secondary: '#FAFAFA',
        'light-background': '#EAEAEC',
        'dark-background': '#242424',
        'white-alpha': 'rgba(239, 229, 217, 0.6)',
        'black-alpha': 'rgba(53, 53, 53, 0.6)',
        darken: '#3a3837',
        lighten: '#f9fef3',
        'light-alpha': 'rgba(255,255,255,0.5)',
        shadow: '#bdc1cc'
      }
    }
  },
  plugins: []
}
