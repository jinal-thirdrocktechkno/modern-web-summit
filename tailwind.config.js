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
      colors: {
        gray: '#E5E5E5',
        typography: '#4F4F4F',
        typographyDark: '#4F4F4F',
        typographyLight: '#191919'
      },
    },
    fontFamily: {
      blender: 'Blender Pro'
    }
  },
  variants: {},
  plugins: [],
}