/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tablet: "700px",
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};
