/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],

  mode: "jit",
  theme: {
    extend: {
      colors: {
      theme1: {
        textColor: '#1e180b',
        background: '#f0d394',
        primary: '#82a8f2',
        secondary: '#fcfbf7',
        accent: '#517cd2',
      },
      theme2: {
          textColor: '#0a1306',
          background: '#f2edcf',
          primary: '#aabbe4',
          secondary: '#f3faf0',
          accent: '#c178e2',
        },
        theme3: {
          textColor: '#273435',
          background: '#ffffff',
          primary: '#4ba5cd',
          secondary: '#fbe98e',
          accent: '#ecd14b',
        },
        theme4: {
          textColor: '#01111e',
          background: '#e6f3fe',
          primary: '#034b86',
          secondary: '#cde8fe',
          accent: '#033d6d',
        },
        theme5: {
          textColor: '#0c030c',
          background: '#dfd2d2',
          primary: '#f2cb40',
          secondary: '#f9d380',
          accent: '#579fa2',
        },
        theme6: {
          textColor: '#fbfefd',
          background: '#1f2531',
          primary:'#0b3c5d' ,
          secondary: '#f09f2d',
          accent: '#328bc3',
        },
        theme7: {
          textColor: '#ededed',
          background: '#222546',
          primary: '#29658a',
          secondary: '#474866',
          accent: '#d1d2d6',
        },
        theme8: {
          textColor: '#0a0705',
          background: '#c0b8b4',
          primary: '#5e97b5',
          secondary: '#fcf9f8',
          accent: '#376077',
        },
      },
      backgroundImage: (theme) => ({
      

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
  variants: {},
  plugins: [],
};