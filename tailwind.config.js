/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        xl: "1200px",
        "2xl": "1200px",
      },
      colors: {
        primary: "#7686BD",
        secondary: "#85BD76",
        darkest: "#252525",
        dark: "#2F2D52",
        lightest: "#EAF1F9",
        light: "#C0C0CA",
      },
    },
  },
  plugins: [],
};
