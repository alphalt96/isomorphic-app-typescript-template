const tailwindcss = require('tailwindcss');
// no need to use autoprefixer to compile talwindcss when using webpack
const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer
  ],
};
