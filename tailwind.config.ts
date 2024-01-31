import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        green: '#7A910D',
        white: '#FAFFE3',
        dark: '#373C1A',
        black: '#101208',
        yellowLight: '#E2F779'
      },
      boxShadow: {
        'greenShadow': '15px 15px 100px -20px rgba(122, 145, 13)'
      },
      backdropBlur: {
        xs: '1px',
      },
      backgroundImage: {
        gradientFirst: "linear-gradient(to bottom, #101208, rgb(122 145 13 / 0.25))",
        gradientSecond: "linear-gradient(to bottom, rgb(122 145 13 / 0.25), rgb(122 145 13 / 0.5))",
        gradientThird: "linear-gradient(to left bottom, #FAFFE3, rgb(122 145 13 / 0.75))",
        gradientFourth: "linear-gradient(to bottom, rgb(122 145 13 / 0.75), rgb(122 145 13))",
        tech: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1706657304/4_rtkm6f.jpg')",
        fix: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1706657202/Cell-Solutions/3_ismnym.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
