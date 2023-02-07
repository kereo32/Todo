/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#3D1766',
        'light-red': '#FF0032',
        'dark-red': '#CD0404',
        'input-grey': '#D9D9D9',
        'pepe-yellow': '#FEF752',
        'pepe-purple': '#9D6BCE',
        'pepe-green': '#BCEF4B',
        'pepe-cyen': '#B32580',
      },
      fontFamily: {
        Arimo: 'sans-serif',
      },
    },
  },
  plugins: [],
};
