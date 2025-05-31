const tailwind = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./tailwind.config');

module.exports = {
  plugins: [tailwind(tailwindConfig), autoprefixer()]
};
