const path = require('path');
module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'css-loader', exclude: /node_modules/},
      {test: /\.scss$/, loader: 'sass-loader', exclude: /node_modules/},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader', options: {name: '[name].[ext]', outputPath: 'fonts/', publicPath: '../'}}
    ]
  },
};