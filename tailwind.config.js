/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#343131',
        pink: '#C88EA7',
        yellow: '#FFFED3',
        purple: '#B1AFFF',
        blue: '#BBE9FF',
        test: '#b45309',
        testDk: '#fecaca',
        // En gardant les couleurs de base comme gray
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        }
      },
    },
  },
  plugins: [],
}
