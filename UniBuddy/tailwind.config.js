/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#CF5841',
        'nw200' : '#E7EAED',
        'nw300' : '#707070',
        'nb100' : '1B1B1B',
        'transgm' : '#505050'
      },

    },

    fontFamily: {
      'pjs' : ['Plus Jakarta Sans', 'sans-serif']
    }
  },
  plugins: [],
}