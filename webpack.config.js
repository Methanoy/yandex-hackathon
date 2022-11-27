const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/pages/index.js' }, //поменять путь, если изменим структуру
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  devServer: {
    watchFiles: ('./src/*.html'),
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080, //поменять порт
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash][ext]",
        },
      },
      {
        test: /\.scss$/,
        use: [
          //     "style-loader",
          // без него стабильнее работет, уберем
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },  // sourceMap уточню ещё, пока это не важно
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
          'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' //поменять путь, если изменим структуру
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ]
}
// вроде как так принято. [name] равен тому, что у нас в первой строчке entry: { main.. Т.е. main
