module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '120': '30rem',
        '112': '28rem',
        '104': '26rem',
        'padrao': ''
      },
      height: {
        '128': '36rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple-900': 'rgba(60, 31, 110, 1)',
        'purple-700': '#63439A',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
