const path = require('path');
const AddScopePlugin = require('./AddScopePlugin');
// const webpack = require('webpack');

const resolve = (url) => {
  return path.resolve(__dirname, url);
};
module.exports = {
  entry: {
    'com.cooshu.html/index': './src',
    'com.cooshu.html/config': './src/config.js',
  },
  output: {
    path: resolve('./dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', { loader: 'ts-loader' }],
      },
      {
        test: /\.js|jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  plugins: [
    new AddScopePlugin(),
  ],
  devServer: {
    contentBase: './dist',
    port: 60001,
    publicPath: '/plugins/',
    disableHostCheck: true,
  },
};
