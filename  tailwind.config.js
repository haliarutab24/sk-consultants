module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#2d3a8c",
        secondary: "#3ebd93",
        accent: "#ffa34d",
        background: "#f7f7ff",
        "light-text": "#6b7280",
      },
    },
  },
  plugins: [],
};
