/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yells: '#fcf5b5',
      },
      fontFamily: {
        popp: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
