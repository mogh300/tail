/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
      'bas':'#FCFCFD',
      'primary':' #6F61C0',
      'scenery':'#FFA41B',
      'p':'#777E90',
       'm':'#3772FF',
        'kos':'#F4F5F6',
        'sher':' #141416',
        's': '#FCAEAE'
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        }
      },
    
      spacing: {
        '75': '75vh',
      },
      fontFamily: {
        DM: ["DM Sans"],
    },
    backgroundImage: {
      'primary-bg': "url('/img2/bb.png')",
    'secondary':"url('/img2/u.png')",
  }
  },
  },
  plugins: [],
}