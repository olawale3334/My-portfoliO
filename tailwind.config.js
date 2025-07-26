/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes:{
      //    fadeIn: {
      //     '0%': { opacity: '0' },
      //     '100%': { opacity: '1' },
      //   },
      //   slideUp: {
      //     '0%': { transform: 'translateY(50px)', opacity: '0' },
      //     '100%': { transform: 'translateY(0)', opacity: '1' },
      //   },
      //    slideRight: {
      //     '0%': { transform: 'translateX(-100px)', opacity: '0' },
      //     '100%': { transform: 'translateX(0)', opacity: '1' },
      //   },
      //    slideLeft: {
      //     '0%': { transform: 'translateX(100px)', opacity: '0' },
      //     '100%': { transform: 'translateX(0)', opacity: '1' },
      //   },
       
      // },
      //  animation: {
      //   fadeIn: 'fadeIn 5s ease-out forwards',
      //   slideUp: 'slideUp 5s ease-out forwards',
      //   slideRight: 'slideRight 5s ease-out forwards',
      //   slideLeft: 'slideRight 5s ease-out forwards',
      // },
    },
  },
  plugins: [],
}