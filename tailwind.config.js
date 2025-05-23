/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#2c1e1e',
        gold: '#f5b041',
        azure: '#5dade2',
        parchment: '#fdf6e3',
        'gold-light': '#f8c471',
        'gold-dark': '#d4ac0d',
        'azure-light': '#85c1e9',
        'azure-dark': '#3498db',
      },
      fontFamily: {
        fantasy: ['"Cinzel Decorative"', 'cursive'],
        serif: ['"Cormorant"', 'serif'],
      },
      backgroundImage: {
        'parchment-texture': "url('https://www.transparenttextures.com/patterns/parchment.png')",
        'wood-texture': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(245, 176, 65, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 8px rgba(245, 176, 65, 0.8))' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};