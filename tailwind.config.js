/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#AA00C8",
          light: "#C933DD",
          dark: "#8A00A3",
          alpha: {
            10: "rgba(170, 0, 200, 0.1)",
            20: "rgba(170, 0, 200, 0.2)",
            50: "rgba(170, 0, 200, 0.5)",
          },
        },
        cyan: {
          DEFAULT: "#00EEFF",
          light: "#33F2FF",
          dark: "#00BFD1",
          alpha: {
            10: "rgba(0, 238, 255, 0.1)",
            20: "rgba(0, 238, 255, 0.2)",
            50: "rgba(0, 238, 255, 0.5)",
          },
        },
        blue: {
          DEFAULT: "#0800FF",
          light: "#3933FF",
          dark: "#0600CC",
          alpha: {
            10: "rgba(8, 0, 255, 0.1)",
            20: "rgba(8, 0, 255, 0.2)",
            50: "rgba(8, 0, 255, 0.5)",
          },
        },
        app: {
          bg: "#0a0a0a",
          text: "rgba(255, 255, 255, 0.87)",
          "text-secondary": "#AA00C8",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
  plugins: [],
};
