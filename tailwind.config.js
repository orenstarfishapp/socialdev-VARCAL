/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'custom-black': '0px 0px 10px 0px rgba(0,0,0,0.5)'
      },
      fontFamily: {
        rubik: ['"Rubik", Sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}

