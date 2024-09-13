module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Your custom theme extensions here
    },
    animation: {
      "fade-in": "fadeIn 1s ease-out forwards",
      "slide-in": "slideIn 1s ease-out forwards",
      "float-slow": "float-slow 8s ease-in-out infinite",
      "float-medium": "float-medium 6s ease-in-out infinite",
      "float-fast": "float-fast 4s ease-in-out infinite",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
