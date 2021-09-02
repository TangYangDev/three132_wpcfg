const { default: merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const webpackDevConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        //contentBase: './build',
        port: 18088,
        //hot: true, //热更新是否开启
        open: true
    },
}

module.exports = merge(webpackCommonConfig, webpackDevConfig);