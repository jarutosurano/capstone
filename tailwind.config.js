/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#495E57',
          yellow: '#F4CE14',
        }
      },
      fontFamily: {
        markazi: ['Markazi Text', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
      height: {
        'nav': '81px',
        'footer': '40px',
      }
    },
  },
  plugins: [],
}