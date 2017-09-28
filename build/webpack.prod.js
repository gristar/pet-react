const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const commonConfig = require('./webpack.base.js')

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'scripts/[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract([{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }])
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/[name]_[chunkhash:8].js',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'scripts/[name]_[chunkhash:8].js',
            minChunks: Infinity
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../')
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        disableHostCheck: true
    }
})