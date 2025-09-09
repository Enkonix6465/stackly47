/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // added jsx just in case
  darkMode: "class", // ✅ important
  theme: {
    extend: {
      colors: {
        darkblue: "#0A192F", // custom dark blue shade
      },
    },
  },
  plugins: [],
};
