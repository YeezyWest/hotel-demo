/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main/*.html','./main/*.js'],
  theme: {
    extend: {
      colors:{
      'yellow-ring':'#ffa751'
      },
      keyframes:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},
        },
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out fowards'
      }
    },
  },
  plugins: [],
}
