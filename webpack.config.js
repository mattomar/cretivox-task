const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Your main entry point
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundle.js",
    publicPath: "/", // Required for React Router (if used)
    assetModuleFilename: 'assets/[hash][ext][query]', // ✅ Optional: put assets in /assets
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve from /dist
    },
    historyApiFallback: true, // ✅ Support client-side routing (React Router)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4)$/i,
        type: "asset/resource", // ✅ Handles imported image assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource", // ✅ Handles imported fonts
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Auto-resolve imports without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Your HTML template
    }),
  ],
};