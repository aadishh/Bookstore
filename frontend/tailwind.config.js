/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // roboto: ['Roboto', 'sans-serif'],
        // arial: ['Arial', 'sans-serif'],
        custom: ["YourCustomFont", "sans-serif"],
        garamond: ["Garamond", "serif"],
      },
      colors: {
        indigo: "#5F4ECB",
        shark: "#25272D",
        abbey: "#696E77",
        "santas-gray": "#A0A1A7",
      },
    },
  },
  plugins: [],
};
