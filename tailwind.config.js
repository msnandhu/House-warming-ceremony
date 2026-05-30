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
          light: '#fff0f3',
          soft: '#fce4ec',
          medium: '#f8bbd0',
          DEFAULT: '#e91e63',
          dark: '#880e4f',
        },
        green: {
          light: '#e8f5e9',
          medium: '#a5d6a7',
          DEFAULT: '#81c784',
          dark: '#2e7d32',
          darker: '#0c2b11',
        },
        terracotta: {
          light: '#ff80ab', // pink-accent
          DEFAULT: '#e91e63', // pink-DEFAULT
          dark: '#880e4f', // pink-dark
        },
        gold: {
          light: '#a5d6a7', // light green / mint
          DEFAULT: '#81c784', // light green DEFAULT
          dark: '#2e7d32', // green-dark
          goldLight: '#f3d06b', // original gold preserved for traditional highlights
          goldDEFAULT: '#d4af37',
          goldDark: '#aa7c11',
        },
        beige: {
          light: '#fff0f3', // pink-light
          DEFAULT: '#fce4ec', // pink-soft
          dark: '#f8bbd0', // pink-medium
        },
        wood: {
          light: '#81c784', // green-medium
          DEFAULT: '#2e7d32', // green-dark
          dark: '#0c2b11', // green-darker
        },
        glow: {
          light: '#ff80ab', // pink glow light
          DEFAULT: '#e91e63', // pink glow
          dark: '#880e4f', // pink glow dark
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'silk-pattern': "radial-gradient(circle, rgba(233,30,99,0.1) 1px, transparent 1px)",
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(129, 199, 132, 0.4)',
        'lamp-glow': '0 0 25px rgba(233, 30, 99, 0.6)',
      }
    },
  },
  plugins: [],
}
