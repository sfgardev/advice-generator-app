/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "clr-light-cyan": "hsl(var(--clr-light-cyan) / <alpha-value>)",
        "clr-neon-green": "hsl(var(--clr-neon-green) / <alpha-value>)",
        "clr-grayish-blue": "hsl(var(--clr-grayish-blue) / <alpha-value>)",
        "clr-dark-grayish-blue":
          "hsl(var(--clr-dark-grayish-blue) / <alpha-value>)",
        "clr-dark-blue": "hsl(var(--clr-dark-blue) / <alpha-value>)",
      },
      boxShadow: {
        btnHover: "0 0 40px 5px #115500;",
      },
    },
  },
  plugins: [],
};
