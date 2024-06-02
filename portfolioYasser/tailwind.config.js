/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dPurple: "var(--Dark-Purple)",
        lPurple: "var(--Light-Purple)",
        Beige: "var(--Beige)",
      },
    },
  },
  plugins: [],
};
