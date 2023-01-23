/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
},
  content: ['./about.html{html}'],
  theme: {
    extend: {},
  },
  plugins: [    require('tw-elements/dist/plugin')
],
}
