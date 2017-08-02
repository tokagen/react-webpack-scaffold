var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

function getEntrySources(sources) {
  sources.push('babel-polyfill');
  sources.push('bootstrap-loader?bootstrapVersion=4');
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }
  return sources;
}

module.exports = {
  devtool: 'source-map',
  entry: {
    index: getEntrySources(['./js/index'])
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'public/bundle.js'
  },
  resolve: {
    alias: {
      joi: 'joi-browser'
    }
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'postcss-loader?sourceMap=inline', 'sass-loader?indentedSyntax=true&sourceMap&sourceMapContents']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      filename: 'index.html'
    }),
    new webpack.EnvironmentPlugin(['API_ENDPOINT', 'NODE_ENV'])
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
    // enable HMR on the server
  }
};
