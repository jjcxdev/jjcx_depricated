/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    fontFamily: {
      'ethnocentric': ['ethnocentric', 'sans-serif'],
      'jost': ['jost', 'sans-serif'],
      'gobold': ['gobold', 'sans-serif'],
      'source': ['source code pro', 'serif']
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pink: "#FE0FB5",
        blue: "#09E9F0",
        "dk-grey": "#111111",
        "lt-grey": "#A1A1A1",
        blk: "#090909",
      },
    },
  },
  plugins: [],
}