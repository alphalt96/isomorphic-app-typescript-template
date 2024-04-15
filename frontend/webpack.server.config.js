const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = Object.assign({}, {
  mode: 'development',
  entry: './src/ServerApp.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'react'
  }
}, baseConfig);
