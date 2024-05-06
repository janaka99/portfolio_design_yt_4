/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "var(--accent-100)",
          300: "var(--accent-300)",
          500: "var(--accent-500)",
          800: "var(--accent-800)",
        },
        primary: {
          100: "var(--primary-100)",
          500: "var(--primary-500)",
        },
      },
    },
  },
  plugins: [],
};
