/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('../public/image/About1.png')",
        'polygonup1': "url('../public/image/Polygon1.png')",
        'polygondown1': "url('../public/image/Polygon2.png')",
        'polygonup2': "url('../public/image/Polygon3.png')",
        'polygondown2': "url('../public/image/Polygon4.png')"
      }
    },
  },
  plugins: [],
}

