/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rotate45: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        rotate0:{
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        rotate45: 'rotate45 .4s ease-in-out forwards',
        rotate0:'rotate0 .4s ease-in-out forwards'
      },
    },
  },
  plugins: [],
};
