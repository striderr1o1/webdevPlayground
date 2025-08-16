const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    //plugins
    plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  //loaders
   module: {
    rules: [
      {
        test: /\.css$/i,//array should be written in reverse
        use: ["style-loader", "css-loader"],
      },
      {//html loader for loading images in html
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },      
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
};
