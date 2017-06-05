var webpack = require('webpack')
var path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

var buildFolder = path.resolve(__dirname + '/build');
var appFolder = path.resolve(__dirname + '/app');

module.exports = {
    devtool: 'source-map',
    entry: [
        appFolder+'/index.tsx'
    ],
    output: {
        filename: 'app.js',
        publicPath: 'build',
        path: path.resolve('build')
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
        stats: {
            modules: false,
            chunks: false,
            children: false,
            chunkModules: false,
            hash: false,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('app') }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin(),
    ]
}