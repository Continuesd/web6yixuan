var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './client/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader', query: {
                        limit: 10000,
                       name: 'img/[name].[ext]'
                    }
                }],
            },

            {test: /\.ts$/, use: ['ts-loader'], exclude: /node_modules/},
            {test: /\.html$/, use: ['raw-loader']},
            /*  {test: /\.css$/, use: ['raw-loader']},*/
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
     /*   new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            }
        }),*/
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]
};
