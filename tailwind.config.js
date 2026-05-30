/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#fff8f8', // soft red background
          soft: '#ffebee', // pastel red
          medium: '#ffcdd2', // medium pastel red
          DEFAULT: '#d32f2f', // rich traditional red
          dark: '#7f0000', // deep maroon
        },
        green: {
          light: '#fffde7', // yellow-light
          medium: '#ffe082', // yellow-medium
          DEFAULT: '#fbc02d', // yellow DEFAULT
          dark: '#f57f17', // yellow dark (saffron)
          darker: '#3a0000', // deep dark red (for headers/footers)
        },
        terracotta: {
          light: '#ff8a80',
          DEFAULT: '#d32f2f',
          dark: '#7f0000',
        },
        gold: {
          light: '#ffe082', // yellow-medium
          DEFAULT: '#fbc02d', // yellow DEFAULT
          dark: '#f57f17', // yellow dark (saffron)
          goldLight: '#f3d06b',
          goldDEFAULT: '#d4af37',
          goldDark: '#aa7c11',
        },
        beige: {
          light: '#fff8f8',
          DEFAULT: '#ffebee',
          dark: '#ffcdd2',
        },
        wood: {
          light: '#ffe082',
          DEFAULT: '#f57f17',
          dark: '#3a0000',
        },
        glow: {
          light: '#ff8a80',
          DEFAULT: '#d32f2f',
          dark: '#7f0000',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'silk-pattern': "radial-gradient(circle, rgba(211,47,47,0.1) 1px, transparent 1px)",
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(251, 192, 45, 0.4)',
        'lamp-glow': '0 0 25px rgba(211, 47, 47, 0.6)',
      }
    },
  },
  plugins: [],
}
