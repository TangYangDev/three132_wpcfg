
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* 获取文件绝对路径 */
const { resolve } = require('path');

//安装babel：npm install babel-loader @babel/core @babel/preset-env -D
//           npm install --save @babel/polyfill

//安装闭包方式：npm install --save-dev @babel/plugin-transform-runtime
//             npm install --save/runtime 

module.exports = {
    mode: 'development', //production
    /*webpack本地服务配置 */
    devServer: {
        //contentBase: './build',
        port: 18088,
        //hot: true, //热更新是否开启
        open: true
    },
    /* 开启源码映射到浏览器控制台 
       eval-cheap-module-source-map 开发环境配置推荐
       cheap-module-source-map 线上环境配置推荐
     */
    devtool: 'eval-cheap-module-source-map',
    entry: "./index.js", //入口文件
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'build.js' //输出文件
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
                        outputPath: 'img/'
                    }
                }
            }
        ]
    },
    /* plugin配置 */
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
    ]
}

