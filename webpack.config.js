var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new WebpackNotifierPlugin({ title: 'Webpack' })
  ]
};