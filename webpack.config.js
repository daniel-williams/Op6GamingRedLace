var path = require('path');
var webpack = require('webpack');
var url = require('url-loader');


var bower_components = path.resolve(__dirname, 'bower_components');
var node_modules = path.resolve(__dirname, 'node_modules');

var ROOT = path.resolve(__dirname, 'http.dev/');
var DIST = path.resolve(ROOT, 'assets/scripts');


var config = {
    entry: {
        //app: path.resolve(ROOT, 'app/main.js'),
        app: ['webpack/hot/dev-server', path.resolve(ROOT, 'app/main.js')],
    },
    output: {
        path: DIST,
        filename: '[name].js',
        publicPath: 'http://localhost:8080/',
    },
    module: {
        PRELOADERS: [
            { test: /\.jsx?$/, include: path.resolve(ROOT, 'app'), loader: 'eslint-loader' },
        ],
        loaders: [
            { test: /\.jsx?$/, exclude: [node_modules, bower_components], loaders: ['babel'] },
            { test: /\.less$/, loader: 'style!css!less'},
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'url?limit=100000' },
        ],
    },
};

module.exports = config;
