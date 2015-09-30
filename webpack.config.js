var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: [ './static/js/main.js' ],
        test: [ './static/js/test/main.js' ]
    },
    output: {
        path: __dirname + '/static/build/js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},

            { test: /\.jpg/, loader: 'file-loader?name=/static/img/[name].[ext]&minetype=image/jpg' },
            { test: /\.jpeg/, loader: 'file-loader?name=/static/img/[name].[ext]&minetype=image/jpg' },
            { test: /\.png/, loader: 'file-loader?name=/static/img/[name].[ext]&minetype=image/png' },
            { test: /\.gif/, loader: 'file-loader?name=/static/img/[name].[ext]&minetype=image/gif' },

            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/[name].css', { allChunks: true })
    ]
};
