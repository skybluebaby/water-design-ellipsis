const path = require('path');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.tsx', '.jsx', '.js', '.json'],
        },
      },
      {
        test: /\.(j|t)sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(c|s[ac])ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ForkTSCheckerWebpackPlugin(),
  ],
};
