/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['"Bai Jamjuree"', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        alata: ["Alata", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

