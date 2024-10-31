/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./hero_bg.jpg')",
      },
    },
  },
  plugins: [],
}

