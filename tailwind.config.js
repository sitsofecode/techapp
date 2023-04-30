/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'headerSliderDarkColor' :'#1A1C23',
        'headerSliderLightColor' :'#ffffff',
        'lightColor':"#F9FAFB",
        "DarkColor" : "#121317"
      }
    },
  },
  plugins: [],
}
