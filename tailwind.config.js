/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        principal: '#1B262C',
        secundario:'#0F4C75',
        terciario: '#3282B8',
        text:'#BBE1FA'
      },
      textColor:{
        principal: '#1B262C',
        secundario:'#0F4C75',
        terciario: '#3282B8',
        text:'#BBE1FA'
      },
      backgroundImage : {
        'sanfrancisco': "url(../img/sanFrancisco.jpg)",
        'sanfranciscoD': "url(../img/sanFranciscoDesktop.jpg)",
        'bali': "url(../img/bali.jpg)",
        'chicago': "url(../img/chicago.jpg)",
        'europe': "url(../img/europe.jpg)",
        'iceland': "url(../img/iceland.jpg)",
        'LA': "url(../img/LA.jpg)",
        'miami': "url(../img/miami.jpg)",
        'NY': "url(../img/new_york.jpg)",
        'norway': "url(../img/norway.jpg)",
        'seattle': "url(../img/seattle.jpg)",
        'switzerland': "url(../img/switzerland.jpg)",
        'sydney': "url(../img/sydney.jpg)",
        'yosemite': "url(../img/yosemite.jpg)"
      },
      fontFamily:{
        Noto: ['Noto Serif Display', 'serif']
      }
    },
  },
  plugins: [],
}
