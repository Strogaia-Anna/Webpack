const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssLoader = require('css-loader');
const MiniCssExtractPluginCssLoader = require('mini-css-extract-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPluginCssLoader.loader,
                    'css-loader'
                ]
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPluginCssLoader()
    ]
}

