const path = require('path');


const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'developmnet';
const target = devMode ? 'web' : 'browserslist';
const devtool = 'source-map';

module.exports = {
  mode,
  target,
  devtool,
  entry: [
    path.resolve(__dirname, 'src', 'components', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash: 8].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    port: 3000,
    open: true,
    host: 'localhost',
  },
  plugins: [

  ],
  module: {
    rules: [

    ]
  }
}