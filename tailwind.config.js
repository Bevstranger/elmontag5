/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f0f9',
          100: '#cce0f3',
          200: '#99c2e8',
          300: '#66a3dc',
          400: '#3385d1',
          500: '#2662A0', // Main primary color
          600: '#224f86',
          700: '#1d3d69',
          800: '#17304f',
          900: '#0f1e32',
        },
        secondary: {
          50: '#fcf5ea',
          100: '#f9ebd5',
          200: '#f3d7ab',
          300: '#edc480',
          400: '#E09743', // Main secondary color
          500: '#d58a39',
          600: '#b97431',
          700: '#8a5724',
          800: '#5c3a18',
          900: '#2e1d0c',
        },
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};