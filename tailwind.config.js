/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary':'#1A1A1A',
        'secondary' : '#F6F0E2'
      },
      textColor:{
        'primary':'#1A1A1A',
        'secondary' : '#F6F0E2'
      },
      fontFamily:{
        GeneralSans:"General Sans",
        
      },
    },
  },
  plugins: [],
};
