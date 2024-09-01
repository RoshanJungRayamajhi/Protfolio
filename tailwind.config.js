/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'New': ['New', 'sans-serif'],
      'Founder': ['Founder', 'sans-serif'],
    },
  },
  plugins: [],
}