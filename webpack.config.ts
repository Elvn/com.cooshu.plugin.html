// const AddScopePlugin = require('./AddScopePlugin');
// const { AddScopePlugin } = require('kusu-plugin-sdk');
import * as path from 'path';
import { AddScopePlugin } from 'kusu-plugin-sdk';
import * as webpack from 'webpack';
import { config as pluginConfig } from './src/config';

const resolve = (url: string) => {
  return path.resolve(__dirname, url);
};

const config: webpack.Configuration = {
  entry: {
    'index': './src',
    //'com.cooshu.html/config': './src/config.js',
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
    new AddScopePlugin({
      'index': pluginConfig,
    }),
  ],
  devServer: {
    port: 60001,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};

export default config;
