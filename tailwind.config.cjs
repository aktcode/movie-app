/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273244",
        secondary: "#1f2b3b",
        mblock: "#394b61",
        textGrey: "#d4d7dd",
        btnColor: "#48e0ff",
        secondaryW: "#c3cee0"
      },
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
      },
      keyframes : {
        wrapperAnimations: {
          '0%' : {height: `0px`, opacity: `0.7`},
          '50%' : {height: `0px`, opacity: `0.7`},
          '100%' : {height: `450px`, opacity: `1`},
        }
      }
    },
    screens: {
      xs: {"min" : "480px"},
      ss: {"min" : "620px"},
      sm: {"min" : "768px"},
      md: {'min' : "1060px"},
      lg: {'min' : "1200px"},
      xl: {'min' : "1700px"},
    },
  },
  plugins: [],
}
