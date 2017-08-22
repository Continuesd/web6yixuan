var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader', query: {
                        limit: 8192,
                        name: 'img/[name].[ext]'
                    }
                }],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)((\?|\#)[\?\#\w\d_-]+)?$/,
                use: [{
                    loader: 'url-loader', query: {
                        limit: 100,
                        name: 'fonts/[name].[ext]'
                    }
                }],
            },
            {test: /\.ts$/, use: ['ts-loader'], exclude: /node_modules/},

            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [/*'style-loader', {loader: 'css-loader', options: {importLoaders: 1}},*/
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')(), //CSS浏览器兼容
                                require('cssnano')()] //压缩css
                        }
                    }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css'],
    },
    resolveLoader: {
        modules: ["node_modules"],
        extensions:
            [".js", ".json"],
        mainFields:
            ["loader", "main"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        }),

        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]
};
