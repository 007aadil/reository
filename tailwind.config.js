/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood-red': '#e3342f', // Define the primary red color for the theme
        'light-red': '#ff6b6b', // Lighter red shade for hover states
        'dark-red': '#cc1f1a', // Even darker red for focus states or alerts

      }
    },
  },
  plugins: [],
}

