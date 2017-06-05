/*
var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var buildFolder = path.resolve(__dirname + '/build');
var appFolder = path.resolve(__dirname + '/app');

var config = {
  entry: appFolder + '/index.jsx'
, output: {
    path: buildFolder
  , filename: 'bundle.js'
  , publicPath: '/'
  }
, resolve: {
    extensions: ['.js', '.jsx']
  }
, module: {
    loaders: [
      {
        test: /\.jsx?/
      , include: appFolder
      , loader: 'babel-loader'
      , query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
    plugins: [
        new UglifyJSPlugin({minimise: true})
    ]
}

module.exports = config
*/
