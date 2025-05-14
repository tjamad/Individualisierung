/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5ff',
          100: '#e0eafc',
          200: '#c7d6f6',
          300: '#a1baee',
          400: '#7994e0',
          500: '#5a70cf',
          600: '#4455b8',
          700: '#132C63',
          800: '#0D1B4A',
          900: '#060F28',
        },
      },
    },
  },
  plugins: [],
};