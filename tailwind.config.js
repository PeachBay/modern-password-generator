const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Inter'", ...defaultTheme.fontFamily.sans],
        'mono': ["'Overpass Mono'", ...defaultTheme.fontFamily.mono]
      },
      boxShadow: {
        'custom-input' : '4px 4px 0px 0px #000',
      },
      colors: {
        'custom-black': '#0D1015',
        'custom-black-variant': '#191C20',
        'custom-aqua': '#71FFF6',
        'custom-yellow': '#FAD14F',
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
