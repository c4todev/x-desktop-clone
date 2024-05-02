/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        base: "15px",
      },
      textColor: {
        tw: "#E7E9EA",
      },
    },
  },
  plugins: [],
};
