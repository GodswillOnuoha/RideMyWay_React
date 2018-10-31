const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const env = process.env.NODE_ENV;
const apiHost = env === 'production' ? "'https://carpoolapp1.herokuapp.com'" : "'https://carpoolapp1.herokuapp.com'"  //"'http://localhost:3000'";

module.exports = {
  entry: './client/src/components/App.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new webpack.DefinePlugin({
      __API__: apiHost,
    }),
  ],
};
