var webpack = require('webpack')
var path = require('path')

var buildFolder = path.resolve(__dirname + '/build');
var appFolder = path.resolve(__dirname + '/app');

/*


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
  , port: 3000
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
*/
module.exports = {
    entry: appFolder + '/index.tsx'
    , output: {
        path: buildFolder
        , filename: 'bundle.js'
        , publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        inline: true
        , contentBase: buildFolder
        , port: 3000
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};