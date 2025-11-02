/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["'DM Sans',sans-serif"],
      },
      screens: {
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};
