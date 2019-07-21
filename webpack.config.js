const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        entry: {
            global: './app/index.tsx'
        },
        output: {
            filename: 'global-bundle.js',
            path: __dirname + '/app/'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['ie >= 11']
                                    }
                                }
                            ]
                        ]
                    }
                }                
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                Promise: 'es6-promise'
            })
        ]
    }
];
