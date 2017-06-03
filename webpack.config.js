var webpack = require('webpack')
var path = require('path')

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
, devtool: 'source-map'
, devServer: {
    inline: true
  , contentBase: buildFolder
  , port: 3333
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
  }
}

module.exports = config
