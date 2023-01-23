/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scrollnav: "scrollnav .25s ease-in",
      },
      keyframes: {
        scrollnav: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
