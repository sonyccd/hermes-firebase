const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './[name].bundle.js'
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env']],
                        plugins: [
                            [
                                'component',
                                {
                                    libraryName: 'element-ui',
                                    styleLibraryName: 'theme-chalk'
                                }
                            ],
                            'transform-object-rest-spread'
                        ]
                    }
                }
            },
            {test: /\.html$/, use: ['html-loader']},
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            // file-loader(for images)
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/media/'
                        }
                    }
                ]
            },
            // file-loader(for fonts)
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new VueLoaderPlugin()
    ]
};
