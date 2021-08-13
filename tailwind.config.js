module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      borderOpacity: ['active'],
      borderRadius: ['active'],
      borderStyle: ['active'],
      borderWidth: ['active'],
      rotate: ['active', 'group-hover','hover'],
      transform: ['hover', 'responsive']
    },
  },
  plugins: [],
}
