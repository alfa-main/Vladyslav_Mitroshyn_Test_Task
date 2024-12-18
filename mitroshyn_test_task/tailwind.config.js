/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px" },
        sm: { min: "743px" },
        md: { min: "744px" },
        lg: { min: "1200px" },
        xl: { min: "1440px" },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom)",
        "2-px": "2px",
        "3-px": "3px",
        "4-px": "4px",
        "6-px": "6px",
        "8-px": "8px",
        "10-px": "10px",
        "12-px": "12px",
        "14-px": "14px",
        "16-px": "16px",
        "18-px": "18px",
        "20-px": "20px",
        "24-px": "24px",
        "26-px": "26px",
        "28-px": "28px",
        "30-px": "30px",
        "32-px": "32px",
        "40-px": "40px",
        "48-px": "48px",
      },
      colors: {
        black: "#000000",
        green: "#009129",
        darkGreen: "#056A21",
        white: "#ffffff",
        gray: "#939393",
        darkBlue: "#03252B",
        pinkRed: "#43082F",
        blue: "#123156",
        blackTransparent: "rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        dark: "0 0 0 1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
