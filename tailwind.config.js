module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'branco': '#ffffff',
        'cinzento': '#A7A7A7',
        'azulClaro': '#2db1ea',
        'laranja': '#ff7f00',
        'azulEscuro': '#001866'
      }
    },
    fontFamily: {
      'standard': ['Montserrat']
    }
  },
  variants: {},
  plugins: [],
}
