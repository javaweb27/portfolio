/* eslint-disable no-undef */
// const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl-max': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl-max': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg-max': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md-max': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'sm-max': { max: '639px' }
        // => @media (max-width: 639px) { ... }
      }
    }
  },
  plugins: [require('daisyui')]
}
