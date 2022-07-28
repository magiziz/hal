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
        "uniswap-bg-600": "#191B1F",
        "uniswap-bg-400": "#1F2128",
        "uniswap-bg-300": "#40444F",
        "uniswap-bg-200": "#C3C5CB",
      },
    },
    minWidth: {
      "500px": "500px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
