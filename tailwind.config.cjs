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
        },
        primary: {
          100: "#EAF8F1",
        }
      },
      backgroundImage: {
        slider1: "url('slider1.jpg')",
        slider2: "url('slider2.jpg')",
        slider3: "url('slider3.jpg')",
        slider4: "url('slider4.jpg')",
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
      //crie uma animação para quando o modal aparecer
      keyframes: {
        modal: {
          "0%": {
            transform: "translateY(-300px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        cards: {
          "0%": {
            transform: "translateX(-150px)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        modal: "modal 0.5s ease-out",
        cards: "cards 0.3s ease-out"
      }
    },
  },
  plugins: [],
}
