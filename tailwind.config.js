/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        display: ["Dancing Script", "cursive"],
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
