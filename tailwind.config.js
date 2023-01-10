/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        principal: '#CFF5E7',
        secundario:'#A0E4CB',
        terciario: '#59C1BD',
        Text:'#0D4C92',
      }
    },
  },
  plugins: [],
}
