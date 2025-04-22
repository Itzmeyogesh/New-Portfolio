/** @type {import('tailwindcss').Config} */
export default {
  content: ["./Public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        background: "#0f172a",
      },
    },
  },
  plugins: [],
}
