const Fiber = require('fibers')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/_assets/scripts/index.js',
  output: {
    library: 'App',
    path: path.resolve(__dirname, 'src/assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: Fiber,
                outputStyle: 'expanded'
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/_assets/images/',
        to: 'images'
      }]
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/_assets/fonts/',
        to: 'fonts'
      }]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
