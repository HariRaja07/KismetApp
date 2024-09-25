/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#edebeb', // Example primary color
        'primary-hover': '#edebeb', // Example hover color
        secondary: '#060e1c',
        'primary-solid': '#060e1c', // Example solid background color
        'secondary-hover':'#dbd9d9',
      }
    },
  },
  plugins: [],
}
