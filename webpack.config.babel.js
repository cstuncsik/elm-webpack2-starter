import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    app: './client/src/app/app.elm'
  },
  output: {
    publicPath: '/',
    library: 'Elm',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: 'elm-webpack-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      inject: 'head'
    })
  ],
  devtool: 'eval',
  devServer: {
    contentBase: './client/src/',
    inline: true,
    hot: true,
    historyApiFallback: true
  }
};
