/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'amber': '#fef3c7',
      'amber-md': '#f59e0b',
      'amber-dk': '#b45309',
      'test': '#fef2f2',
      'test-md': '#fee2e2',
      'test-dk': '#fecaca'
    },
  },
  plugins: [],
}

