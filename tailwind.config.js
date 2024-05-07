/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('../public/image/About1.png')",
        'polygon': "url('../public/image/Polygon1.png')"
      }
    },
  },
  plugins: [],
}

