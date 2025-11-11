/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "973px",
      },
      fontFamily: {
        Fraunces: ["'Fraunces'", "sans-serif"],
        Barlow: ["'Barlow'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
