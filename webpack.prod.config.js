const path = require('path');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/Ellipsis/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist/lib'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.tsx?$/,
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
  plugins: [new ForkTSCheckerWebpackPlugin()],
};
