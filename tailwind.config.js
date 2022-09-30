/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#131923",
        dark: "#19202d",
        lighter: "#222c3d",
        base: "#A2AECB",
      },
    },
  },
  plugins: [],
};
