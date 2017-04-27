var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
  sources.push("babel-polyfill");
  sources.push("bootstrap-loader?bootstrapVersion=4");
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }
  return sources;
}

module.exports = {
  entry: {
    index: getEntrySources(['./js/index'])
  },
  output: {
    filename: 'public/bundle.js'
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
          fallback: "style-loader",
          use: ['css-loader?sourceMap', 'postcss-loader?sourceMap=inline', "sass-loader?indentedSyntax=true&sourceMap&sourceMapContents"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/style.css',
      allChunks: true
    })
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: __dirname + '/public',
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true
    // enable HMR on the server
  }


};
