var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: true,
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel?presets[]=es2015,presets[]=react' ],
        exclude: /node_modules/,
        include: __dirname        
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
}
