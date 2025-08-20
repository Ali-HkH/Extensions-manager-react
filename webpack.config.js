const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const repoName = "/Extensions-manager-react/";

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: isProd ? repoName : "/",
      clean: true,
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.css$/i, use: ["style-loader", "css-loader", "postcss-loader"] },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: { filename: "assets/images/[name][ext]" },
        },
      ],
    },
    resolve: { extensions: [".js", ".jsx"] },
    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new webpack.DefinePlugin({
        "process.env.PUBLIC_URL": JSON.stringify(isProd ? repoName : ""),
      }),
      new CopyPlugin({
        patterns: [{ from: "public/assets", to: "assets" }],
      }),
    ],
    devServer: {
      static: { directory: path.join(__dirname, "public") },
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    mode: isProd ? "production" : "development",
  };
};
