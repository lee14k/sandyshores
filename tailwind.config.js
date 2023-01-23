/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./about.html/{html}'],
  theme: {
    extend: {},
  },
  plugins: [    require('tw-elements/dist/plugin')
],
}
