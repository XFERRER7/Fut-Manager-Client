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
      },
      boxShadow: {
        //create a new box shadow
        custom: "0 10px 22px 0px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
}
