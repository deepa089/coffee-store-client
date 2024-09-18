/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho: '"Rancho", cursive , sans-serif'
      },
      backgroundImage:{
        'banner-image': "url('./assets/images/more/3.png')"
      },
      height:{
        '800':'800px',
        '300':'300px'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

