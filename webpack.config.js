const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv').config();

module.exports = {
  // ...
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
    }),
  ],
  // other webpack configuration options
};