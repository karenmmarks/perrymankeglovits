const path = require('path');
const express = require('express');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    publicPath: path.join(__dirname, '/dist'),
  },

  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 4000,
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.png|jpg|jpeg|gif|svg?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.([Jj][Pp][Ee]?[Gg]|png|gif|svg)/,
        loader: 'file-loader',
        options: {
          name: '/public/images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = config;
