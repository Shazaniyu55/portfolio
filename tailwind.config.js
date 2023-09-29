/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      margin: {
        'top-adjusted': '16rem',
      },
      
    },

    colors: {
      'adainblack': '#FAE392',
      'niyuyello': '#F79327',
      'niyuwhite': '#ffffff',
      'niyunav': '#793FDF',
      'niyublack': '#000000'

    },
    fontFamily:{
      monteserat: "Montserrat",
      popins:"Poppins"
    },
    
      extend: {
      backgroundImage: {
        'space1one': "url('/images/space1one.jpg')",
        
        },
  },
  plugins: [],
  },
}


