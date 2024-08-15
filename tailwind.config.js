/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        personalizada: ['Sura Sans', 'sans-serif'],
      },
    },
    screens: {
      xxxs: "360px",
      xxs: "400px",
      xs: "480px",
      xsm: "540px",
      smm: "600px",
      sm: "640px",
      md: "768px",
      lgm: "900px",
      lg: "1024px",
      xlg: "1120px",
      xl: "1280px",
      "2xl": "1536px",
      '3xl': '1640px',
    },
  },
  plugins: [],
};
