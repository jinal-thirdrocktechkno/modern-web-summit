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
        gray: '#E5E5E5',
        purple: '#AD60CA',
        typography: '#4F4F4F',
        typographyDark: '#4F4F4F',
        typographyLight: '#191919',
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
  plugins: [],
}