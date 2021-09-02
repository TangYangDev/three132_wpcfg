const HtmlWebpackPlugin = require('html-webpack-plugin');
/* 获取文件绝对路径 */
const { resolve } = require('path');

module.exports = {
    entry: "./src/index.js", //入口文件
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'bundle.js' //输出文件
    },
    /* loader配置 */
    module: {
        rules: [
            /* css loader */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /* image loader */
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        //指定打包后的文件名称
                        outputPath: 'images/',
                        //指定打包后的文件名称
                        name: '[name].[ext]'

                    }
                }
            },
            /* babel loader */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // presets: [
                    //     ['@babel/preset-env', {
                    //         'useBuiltIns': 'usage', //按需注入
                    //         //'corejs': 2
                    //     }],
                    //     //'@babel/preset-react'
                    // ]
                    'plugins': [
                        [
                            '@babel/plugin-transform-runtime',
                            {
                                'obsoluteRuntime': false,
                                'corejs': 2,
                                'helpers': true,
                                'regenerator': true,
                                'useESMidules': false
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}