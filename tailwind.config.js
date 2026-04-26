/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

       // Custom font families add karna
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      // Custom animations
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
        },
      },
      // Animation names define karein
      animation: {
        floatUp: 'floatUp 4s ease-in-out infinite',
        floatDown: 'floatDown 5s ease-in-out infinite',
      },
    },

    
  },
  plugins: [],
}