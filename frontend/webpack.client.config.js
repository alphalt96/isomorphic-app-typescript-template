const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = Object.assign({}, {
  mode: 'development',
  entry: './src/ClientApp.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'client.bundle.js'
  },
}, baseConfig);
