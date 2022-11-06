/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      proxima: ["Proxima Nova"],
      roboto: ["Roboto"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      graybg1: "#F5F5F5",
      graybg2: "#EFF0F5",
    },

    extend: {},
  },
  plugins: [],
};
