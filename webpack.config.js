const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "src/fonts/[name].[ext]",
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'./src/images', to:'images'}
        ]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: 'pages/style-page.html',
            filename: 'style-page.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/my-building-door-options.html',
            filename: 'my-building-door-options.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/my-building-roofing-options.html',
            filename: 'my-building-roofing-options.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/building-packages-with-dialog.html',
            filename: 'building-packages-with-dialog.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/building-packages.html',
            filename: 'building-packages.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order.html',
            filename: 'review-order.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-building-summary-modal.html',
            filename: 'review-order-building-summary-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-order-Information-modal.html',
            filename: 'review-order-order-Information-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-order-option-modal.html',
            filename: 'review-order-order-option-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-purchase-method-purchase-outright-modal.html',
            filename: 'review-order-purchase-method-purchase-outright-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-purchase-method-rent-to-own.html',
            filename: 'review-order-purchase-method-rent-to-own.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-verify-location-accessibility-modal.html',
            filename: 'review-order-verify-location-accessibility-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-rto-application-renter-information-modal.html',
            filename: 'review-order-rto-application-renter-information-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-rto-application-co-renter-information-modal.html',
            filename: 'review-order-rto-application-co-renter-information-modal.html',
        }),
        new HtmlWebpackPlugin({
            template: 'pages/review-order-rto-application-references-modal.html',
            filename: 'review-order-rto-application-references-modal.html',
        })
    ]
};