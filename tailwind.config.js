/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: '#6B46C1', // You can adjust this hex code to match your desired purple shade
      },
    },
  },
  plugins: [],
};
