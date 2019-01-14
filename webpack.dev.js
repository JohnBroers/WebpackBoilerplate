const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development', 
    devServer: {
        contentBase: common.output.path,
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});