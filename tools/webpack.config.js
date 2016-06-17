// In webpack.config.js
var  webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

var potimize = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

var production = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

module.exports = {
  entry: [
    './src/public/main.js'
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
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // { test: /\.(png|jpg|woff|woff2|eot|ttf|otf)/, loader: 'url-loader' },

      // { test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file?limit=500&minetype=image/jpg" }
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'file?name=[path][name].[hash].[ext]'
      // }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, potimize, production],
  debug: true
};
