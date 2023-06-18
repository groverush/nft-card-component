const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(var(--card-color))",
      secondary: "hsl(var(--line-color))",
      white: colors.white,
      black: colors.black
    },
    extend: {}
  },
  plugins: []
}
