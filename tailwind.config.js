/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      proxima: ["Proxima Nova"],
      roboto: ["Roboto"],
    },
    container: {
      center: true,
    },
    screens: {
      sm: "414px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      graybg1: "#F5F5F5",
      graybg2: "#EFF0F5",
    },
    boxShadow: {
      barlarge:
        "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      barsmall:
        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    },
    extend: {},
  },
  plugins: [],
};
