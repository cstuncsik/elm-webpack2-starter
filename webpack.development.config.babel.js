import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    app: './client/src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader',
          options: {
            verbose: true,
            warn: true
          }
        }
      }
    ],
    noParse: /\.elm$/
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './client/src/index.html'
    })
  ],
  devtool: 'eval',
  devServer: {
    contentBase: './client/src/',
    inline: true,
    hot: true,
    historyApiFallback: true,
    open: true
  }
};
