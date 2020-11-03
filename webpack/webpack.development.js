'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const filename = ext => `bundle.${ext}`;


const development = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'article.html',
      template: 'article.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: '404.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'add.html',
      template: 'add.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: 'profile.html',
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  devtool: 'inline-source-map',
  optimization: {
    runtimeChunk: 'single',
  },
};

module.exports = development;
