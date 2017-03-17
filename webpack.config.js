const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});
// const ExtractSASS = new ExtractTextPlugin('/dist/styles.css')
const ExtractSASS = new ExtractTextPlugin('style.css')


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: 'css?sourceMap!sass?sourceMap'
        })
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractSASS
  ]
}; 