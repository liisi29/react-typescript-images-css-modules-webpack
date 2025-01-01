// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const { HotModuleReplacementPlugin } = require("webpack");
// const {
//   Configuration: WebpackDevServerConfiguration,
// } = require("webpack-dev-server");

// module.exports = {
//   mode: "production",
//   entry: "./src/index.tsx",
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "[name].[contenthash].js",
//     publicPath: "",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/i,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-react",
//               "@babel/preset-typescript",
//             ],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "src/index.html",
//     }),
//     new ForkTsCheckerWebpackPlugin({
//       async: false,
//     }),
//     new ESLintPlugin({
//       extensions: ["js", "jsx", "ts", "tsx"],
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({
//       filename: "[name].[contenthash].css",
//     }),
//   ],
// };
