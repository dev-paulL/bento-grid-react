/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        purple100: "hsl(254, 88%, 90%)",
        purple500: "hsl(256, 67%, 59%)",
        yellow100: "hsl(31, 66%, 93%)",
        yellow500: "hsl(39, 100%, 71%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 7%)",
      },
      fontSize: {
        small: "1.125rem",
        ok: "1.8rem",
        normal: "2.3rem",
        medium: "2.8rem",
        big: "4rem",
      },
      fontFamily: {
        sans: ['"DM Sans"'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      gridTemplateColumns: {
        main: "repeat(4, 1fr)",
      },
      gridTemplateRows: {
        main: "repeat(8,9.5rem)",
      },
    },
  },
  plugins: [],
};
