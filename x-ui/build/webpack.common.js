const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(process.cwd(), "./lib"),
    filename: "x-ui.common.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhiteSpace: false, // 打包后，清除多余空格
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
