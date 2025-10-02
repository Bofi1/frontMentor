/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["'Barlow Semi Condensed'", "sans-serif"],
      },
      screens: {
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
