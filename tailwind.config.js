/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': { max: '639px' }, // For screens smaller than 640px
      },
      animation:{
        marquee: "marquee 5s linear infinite",
        marqueeBounce: "marqueeBounce 5s ease-in-out infinite",
      },
      keyframes: {
        marqueeBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}

