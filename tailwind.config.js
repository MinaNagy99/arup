/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#415E6F",
        gold: "#C5A363",
        gray: "#D0D9DC",
      },
      fontSize: {
        xxxl: "clamp(1.25rem, 4vw, 2.5rem)", // Large headers
        xxl: "clamp(1rem, 3.5vw, 2rem)", // Subheaders
        xl: "clamp(0.875rem, 2.5vw, 1.5rem)", // Section titles
        lg: "clamp(0.75rem, 2vw, 0.9375rem)", // Medium text
        base: "clamp(0.625rem, 1.5vw, 0.6875rem)", // Regular text
        sm: "clamp(0.375rem, 0.875vw, 0.375rem)", // Small text
      },
    },
  },
  plugins: [],
});