/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: "#050816",
        secondary: "#0F172A",
        neonBlue: "#38BDF8",
        purpleGlow: "#8B5CF6",
      },
      boxShadow: {
        'neon': '0 0 10px #38BDF8, 0 0 20px #38BDF8',
        'purple-neon': '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
