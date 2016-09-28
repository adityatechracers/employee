var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'), //current folder as the reference to the other paths

  entry: {
    javascript: './routes.js', //entry point for building scripts
    html: './index.html'       //entry point for building html
  },
  output: { 
    path: path.join(__dirname, 'dist'), 
    filename: 'bundle.js'      //save result in 'dist' folder
  },
  module: {
    loaders: [
      { //transpile ES2015 with JSX into ES5
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};