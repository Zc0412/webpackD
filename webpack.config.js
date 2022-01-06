const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // loader 高级写法
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      // 处理图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      // 处理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      // 处理CSV文件
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"]
      },
      // 处理xml文件
      {
        test: /\.xml$/i,
        use: ["xml-loader"]
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse
        }
      }
    ]
  }
};