var webpack = require('webpack');
var path = require('path');

var appName = 'app';
var outputFile = appName + '.js';

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFile,
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'react-hot!babel',
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

module.exports = config;
