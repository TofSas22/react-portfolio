/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",      // Your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // All JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '10px', // Add backdrop blur levels
      },
    },
  },
  plugins: [],
}

