/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dPurple: "var(--Dark-Purple)",
        lPurple: "var(--Light-Purple)",
        Beige: "var(--Beige)",
        bgPurple: "var(--Lighter-Purple)",
        bgCards: "var(--Card-Background)",
      },
    },
  },
  plugins: [],
};
