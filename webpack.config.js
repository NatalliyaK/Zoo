const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: {
        main: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
            { template: './src/index.html' }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/image'),
                    to:   path.resolve(__dirname, 'dist/image')
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    development ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
})
