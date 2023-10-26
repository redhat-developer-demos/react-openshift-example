const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 3000,
    host: '0.0.0.0', // This will allow requests from all hosts
    historyApiFallback: true,
  },
};
