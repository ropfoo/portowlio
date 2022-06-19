module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      snowowl: '#EEF3F7',
      nightowl: '#08080A',
      stoneowl: '#262639',
      mouse: '#DDE6ED',
      jeans: '#0085FF',
      jeanslight: '#33b4ff',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
