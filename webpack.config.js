const path = require('path');
const webpack = require('webpack');

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
  ],
  // other webpack configuration options
}