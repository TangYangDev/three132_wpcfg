const { default: merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const webpackProdConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map'
}

module.exports = merge(webpackCommonConfig, webpackProdConfig);