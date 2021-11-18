module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        '1/2':'50%',
        '-1/2':'50%'
      },
      transitionProperty: {
        'width': 'width',
      },
      keyframes: {
        wiggle: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 0.75s ease-in-out',
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      width: ['responsive', 'hover', 'focus', 'group-hover'],
      display: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
