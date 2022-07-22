/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
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
        bodyColor: "hsl(250, 60%, 99%)",
        containerColor: "#fff",
        scrollBarColor: "hsl(250, 12%, 90%)",
        scrollThumbColor: "hsl(250, 12%, 80%)",

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
  plugins: [],
};
