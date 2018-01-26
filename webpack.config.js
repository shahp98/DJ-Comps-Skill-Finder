var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin({ filename: "[name].css" })
  ],

  module: {
    rules: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader', // to transform JSX into JS
          options: {
              presets: ["react", "es2015", "stage-1"]
          }
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader']
          })
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  }
}
