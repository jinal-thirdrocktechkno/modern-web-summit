module.exports = {
  purge: [],
  // purge: {
  //   enabled: true,
  //   content: ["./pages/**/*.tsx"]
  // },
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      boxShadow: {
        xs: '0 0 40px rgba(0, 0, 0, 0.1)'
      },
      minHeight: {
        '778' : '778px'
      },

      letterSpacing: {
        widest: '6px'
      },
      width: {
        '23': '23.5rem'
      },
      flex: {
        '23': '0 0 23.5rem'
      },
      colors: {
        gray: {
          '100': '#E5E5E5',
          '200': '#BDBDBD',
          '300': '#4F4F4F',
          '400': '#191919'
        },
        purple: {
          '100': '#AD60CA',
          '200': '#803A9A',
        },
        darkBg: 'rgba(0, 0, 0, 0.8)',
        lightGreen: '#6FCF97'
      },
    },
    fontFamily: {
      blender: 'Blender Pro',
      menlo: 'Menlo Regular'
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-blend-mode')(), // no options to configure
  ],
}