// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nightBg: '#1E1E2C', // Dark background color
        nightPrimary: '#292D3E', // Slightly lighter dark color for cards
        nightAccent: '#BB86FC', // Accent color (muted purple)
        nightText: '#E0E0E0', // Light gray text color
        nightSecondary: '#03DAC5', // Secondary accent color (teal)
      },
      fontFamily: {
        custom: ['Poppins', 'sans-serif'], // Customize font for night mode
      },
      borderRadius: {
        custom: '8px', // Slightly rounded corners for a sleek look
      },
      boxShadow: {
        custom: '0 4px 12px rgba(0, 0, 0, 0.3)', // Deeper shadow for night mode
      },
    },
  },
  plugins: [],
};