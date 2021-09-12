const path = require('path');
const express = require('express');
const open = require('open');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.dev.config');

app.use(
    express.static(path.join(__dirname, './src/static'))
);

const PORT = 18460;

const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet: true
});

app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

app.listen(PORT, '0.0.0.0', () => {
    open(`http://localhost:${PORT}`);
    console.log(`开发服务器启动中: 0.0.0.0:${PORT}`);
});
