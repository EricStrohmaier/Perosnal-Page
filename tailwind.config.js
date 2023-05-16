/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
       "primary-text": "#fbfefd",
        background: "#1f2531",
        "primary-color":" #d9b311",
        "secondary-color": "#0b3c5d",
        accent: "#328bc3",
       

      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
        "linear-gradient(to left, #505baf,  #92f2aa )",

        "gradient-rainblue":
          "linear-gradient(to right, #505baf,  #92f2aa )",
      }),
      fontFamily: {
        oswald: ["Oswald", "san-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
     
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};