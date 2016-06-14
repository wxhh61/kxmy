// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/public/main.js',// './src/public/main.css'
   ],
  output: {
    path: './build',
    filename: "main.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/,
       // include: '../src/mains.js',
       exclude: /node_modules/,
       loader: "babel-loader",
       query: {
          presets: ['react', 'es2015']
        }
      },
      // { test: /\.css$/, loader: "style!css" ,exclude: /\.jpg$/}
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  debug: true
};
