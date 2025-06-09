/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
      keyframes: {
        'slide-ltr': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-rtl': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'slide-ltr': 'slide-ltr 20s linear infinite',
        'slide-rtl': 'slide-rtl 20s linear infinite',
      },
    },
  },
  plugins: [],
}