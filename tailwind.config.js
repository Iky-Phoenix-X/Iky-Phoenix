/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        nav: 'from-violet-500 to-fuchsia-500',
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
        poppins: ['"Poppins", sans-serif'],
      },
      dropShadow: {
        'sss': '4px 4px 3px #00000090',
      }
    },
  },
  plugins: [],
}

