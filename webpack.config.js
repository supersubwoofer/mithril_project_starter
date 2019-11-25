const path = require("path");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "bin/js"),
    filename: "app.js"
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};