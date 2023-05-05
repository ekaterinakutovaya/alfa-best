/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'green': '#28C79E',
        'white': '#fff',
        'black': '#1B2330',
        'grey': '#8D9197'
      },
      boxShadow: {
        'boxShadowDefault': '0px 4px 34px rgba(0, 0, 0, 0.08)'
      },
      borderColor: {
        'lightGrey': '#F3F3F3'
      }
    },
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1440px"
    },
    transitionTimingFunction: {
      'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
    },
    fontFamily: {
      arimo: ["Arimo", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")]
}
