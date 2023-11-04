/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "2706px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        tobarBackground: "#252F3D",
        // myPrimaryColor: "#1E1E1E",
        // mySecondaryColor: "#696969",
      },
      fontFamily: {
        // Roboto: ["Roboto", "sans-serif"],
      },
      // screens: {
      //   xs: "480px",
      // },
    },
  },
  plugins: [],
};
