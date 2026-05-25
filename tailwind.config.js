/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          light: '#d25d48',
          DEFAULT: '#b33925',
          dark: '#8b2617',
        },
        gold: {
          light: '#f3d06b',
          DEFAULT: '#d4af37',
          dark: '#aa7c11',
        },
        beige: {
          light: '#faf6eb',
          DEFAULT: '#f5ebd5',
          dark: '#e6d5b8',
        },
        wood: {
          light: '#6a4523',
          DEFAULT: '#4a2c11',
          dark: '#2b180a',
        },
        glow: {
          light: '#ffb355',
          DEFAULT: '#ff9e22',
          dark: '#ff7200',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'silk-pattern': "radial-gradient(circle, rgba(139,38,23,0.1) 1px, transparent 1px)",
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.4)',
        'lamp-glow': '0 0 25px rgba(255, 158, 34, 0.6)',
      }
    },
  },
  plugins: [],
}
