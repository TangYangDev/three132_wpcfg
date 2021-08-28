const { default: merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const webpackDevConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map'
}

module.exports = merge(webpackCommonConfig, webpackDevConfig);