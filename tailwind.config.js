module.exports = {
  purge: [],
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./pages/**/*.tsx",
  //     "./pages/**/*.jsx",
  //     "./container/**/*.tsx",
  //     "./container/**/*.jsx",
  //   ]
  // },
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      spacing: {
        '450': '450px'
      },
      boxShadow: {
        xs: '0 0 40px rgba(0, 0, 0, 0.1)'
      },
      minHeight: {
        '778': '778px'
      },
      height: {
        '100-5': 'calc(100% - 5rem)'
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
          '300': '#BB51E2',
        },
        lightGreen: {
          '100': '#4AFF47',
          '200': '#16FF11',
        },
        darkBg: 'rgba(0, 0, 0, 0.8)',
        lightGrey: '#242528'
      },
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
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