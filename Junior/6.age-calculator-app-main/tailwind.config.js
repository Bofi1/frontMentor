/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "700px",
        mid: "560px",
      },
    },
  },
  plugins: [],
};
