/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "32px",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#fb923c",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
