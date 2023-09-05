const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'components','index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/, //TODO check the .ico files!
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/svg/[name][ext]',
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        }
      },
    ]
  }
}