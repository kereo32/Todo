/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#3D1766',
        'light-red': '#FF0032',
        'dark-red': '#CD0404',
      },
    },
  },
  plugins: [],
};
