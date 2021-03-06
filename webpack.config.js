const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Is the current build a development build
const IS_DEV = process.env.NODE_ENV === 'development';

/**
 * Webpack Configuration
 */
let config = {
  devtool: IS_DEV ? 'cheap-source-map' : false,
  entry: [path.resolve(__dirname, 'src/assets/style/index.scss')],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  stats: {
    hash: false,
    version: false,
    children: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'eccss.css',
      allChunks: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|s?[ca]ss)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'import-glob',
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: IS_DEV,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
            'svg-transform-loader/encode-query',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image/[name]_[hash:8].[ext]',
            },
          },
          { loader: 'svg-transform-loader' },
        ],
      },
    ],
  },
};

if (!IS_DEV) {
  config.plugins.push(new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]));
}

module.exports = config;
