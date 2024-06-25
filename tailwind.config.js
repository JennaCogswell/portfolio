/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'background': '#F7F7EB',
      'primary': '#414436',
      'secondary': '#48531D',
      'accent': '#975C15',

    },
    extend: {
      fontFamily: {
        code: ["Source Code Pro", "monospace"],
        parisienne: ["Parisienne", "cursive"],
      }
    },
  },
  plugins: [],
}

