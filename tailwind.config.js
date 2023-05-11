/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {

    extend: {
      colors: {
        dark: '#141d2f',
        light: '#f6f8ff',
        primary: '#4b6a9b',
        secondary: '#0079ff',
        content: '#1e2a47'
      }
    }
  },
  plugins: []
}
