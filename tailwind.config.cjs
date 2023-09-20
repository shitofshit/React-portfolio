/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f0f0f0 ",
        secondary: "#aaa6c3",
        tertiary: "#f0f0f0",
        "text-color": "#191717",
        "hover-active": "#7D7C7C",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "heading-color": "#213555",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
