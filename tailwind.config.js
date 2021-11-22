module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      red: {
        primary: "#C0222E",
      },
      gray: {
        dark: "#191C1F",
        light: "#232C32",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
