const webpack = require("webpack");
const path = require("path");

const config = {
  cache: true,
  devtool: "source-map",
  entry: {
    polyfills: "./src/polyfills",
    vendor: "./src/vendor",
    main: "./src/main"
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "awesome-typescript-loader" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.html/, loader: "raw-loader" },
      { test: /\.css$/, loader: "to-string-loader!css-loader" }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, "./src")
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["polyfills", "vendor", "main"].reverse(),
      minChunks: Infinity
    })
  ],

  resolve: {
    extensions: [".ts", ".js", ".json"]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: "./src",
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: "empty",
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};

module.exports = config;
