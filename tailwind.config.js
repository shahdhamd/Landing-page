/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {


    extend: {
      screens: {
        '2md': '890px'
      },
      colors: {
        primary: '#7E3AF2',
        secondary: "#6B7280",
        headerText: "#111928",
        backgroundColor:"#F9FAFB"
      },
      fontFamily: {
        Inter: ["Inter", "serif"]
      },
      
    },
  },
  plugins: [

    require('flowbite/plugin')

  ],
}

