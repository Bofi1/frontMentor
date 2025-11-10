/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "710px",
      },
      fontFamily: {
        Fraunces: ["'Fraunces'", "sans-serif"],
        Barlow: ["'Barlow'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
