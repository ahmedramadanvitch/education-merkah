/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#096cb4",
        HoverPrimary: "#0d3c5e",
        // primary: "#0c7e2f",
        // HoverPrimary: "#1c9b43",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
