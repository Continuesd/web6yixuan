var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')
var Config = require("../config");
module.exports = merge(baseWebpackConfig, {
    entry: './client/main.ts',
    output: {
        path: path.resolve(__dirname, "../"+Config.dev.webpackTarget),
        filename: '[name].bundle.js'
    },
    module: {

    },
})