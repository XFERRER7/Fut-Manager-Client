/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //create a new color
      colors: {
        green: {
          100: "#377140",
        }
      },
      fontFamily: {
        //create a new font family
        "sans": ["Roboto", "sans-serif"],
        "Playfair ": ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}
