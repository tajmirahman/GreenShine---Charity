/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOutLoop: {
          '0%, 100%': { opacity: '0' },
          '10%, 90%': { opacity: '1' },
        },
      },
      animation: {
        fadeInOutLoop: 'fadeInOutLoop 2s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui,],
}