/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './tailwind.css', './style.css'],
  theme: {
    screens: {
      'sm': { 'min': '414px', 'max': '720px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '721px', 'max': '1350px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1351px', 'max': '1535px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '0px', 'max': '413px'},
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}