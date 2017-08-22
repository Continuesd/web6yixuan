var path = require('path');
var Config = require("../config.js");
var webpack = require('webpack');
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')

module.exports = merge(baseWebpackConfig, {
    entry: './client/main.ts',
    output: {
        path: path.resolve(__dirname, "../" + Config.pro.webpackTarget),
        /* publicPath: '',*/
        filename: '[name].bundle.min.js'
    },
    module: {},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            }
        })
    ]
})


