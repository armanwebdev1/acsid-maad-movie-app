// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Space Grotesk", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        "bg-dark": "#141414",
        "bg-light": "#181818",
        "netflix-red": "#e50914",
        "gray-900": "#1a1a1a",
        "gray-800": "#2d2d2d",
        "gray-700": "#3d3d3d",
      },
      spacing: {
        "80vh": "80vh",
        "60vh": "60vh",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
