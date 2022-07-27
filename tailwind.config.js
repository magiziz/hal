module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "uniswap-bg-500": "#1F2128",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
