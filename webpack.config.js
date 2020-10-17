const path = require('path');

const config = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 8080,
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
    ],
  },
};

module.exports = config;
