const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/blog-app.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
};