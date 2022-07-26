/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "1rem",
      //   lg: "1.5rem",
      //   xl: "1.5rem",
      //   "2xl": "2rem",
      // },
    },
    extend: {
      keyframes: {
        topBounce: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
        shake: {
          "10%,90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%,80%": { transform: "translate3d(2px, 0, 0)" },
          "30%,50%,70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%,60%": { transform: "translate3d(4px, 0, 0)" },
        },
      },
      animation: {
        topBounce: "topBounce 3s ease-in-out infinite",
        shake: "shake 1s cubic-bezier(0,.07,0,.97) 0.5s infinite",
      },
      animationDelay: {
        2000: "2000ms",
      },
      animationDuration: {
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        5000: "5000ms",
        7000: "7000ms",
      },
      animationIteration: {
        "10x": "10",
      },
      animationTiming: {
        cubic: "cubic-bezier(0, 0, 0.2, 1)",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      colors: {
        /*========== Colors ==========*/
        /* Change favorite color */
        hueColor: "250" /*Purple 250 - Green 142 - Blue 230 - Pink 340*/,

        /*"HSL color mode */
        firstColor: "hsl(250, 69%, 61%)",
        firstColorSecond: "hsl(250, 69%, 61%)",
        firstColorAlt: "hsl(250, 57%, 53%)",
        firstColorLighter: "hsl(250, 92%, 85%)",
        titleColor: "hsl(250, 8%, 15%)",
        textColor: "hsl(250, 8%, 45%)",
        textColorLight: "hsl(250, 8%, 65%)",
        inputColor: "hsl(250, 70%, 96%)",
        bodyColor2: "hsl(250, 60%, 99%)",
        bodyColor: "rgb(237, 242, 248)",
        containerColor: "#fff",
        scrollBarColor: "hsl(250, 12%, 90%)",
        scrollThumbColor: "hsl(250, 12%, 80%)",
        animGreen: "#06d79c",
        animOrange: "#ff9c07",

        /*"HSL Dark color mode */
        darkFirstColorSecond: "hsl(250, 30%, 8%)",
        darkTitleColor: "hsl(250, 8%, 95%)",
        darkTextColor: "hsl(250, 8%, 75%)",
        darkInputColor: "hsl(250, 29%, 16%)",
        darkBodyColor: "hsl(250, 28%, 12%)",
        darkContainerColor: "hsl(250, 29%, 16%)",
        darkScrollBarColor: "hsl(250, 12%, 48%)",
        darkAcrollThumbColor: "hsl(250, 12%, 36%)",
      },
    },
  },
  variants: {
    animationDelay: ["responsive"],
    animationDuration: ["responsive"],
    animationIteration: ["responsive"],
    animationTiming: ["responsive"],
    animationDirection: ["responsive"],
    animationFillMode: ["responsive"],
    animationPlayState: ["responsive"],
  },
  plugins: [require("tailwindcss-animation")],
  corePlugins: {
    // ...
    container: false,
  },
};
