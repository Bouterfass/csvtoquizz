/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        transparent: 'transparent',
        current: 'currentColor',
        lightWhite: "#fafafa",
        lightGrayL: "#e4e5f1",
        lightGray: '#d2d3db',
        lightGrayD: '#9394a5',
        lightPurple: '#484b6a',

        blackDk: '#000000',
        black: '#161618',
        blackL: '#212124',
        darkWhite: '#ffffff',
        darkGray: '#818181',

        validation: '#22c55e',

        test: '#b45309',
        testDk: '#fecaca',

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
