// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,

  //エントリポイント（入力ファイル）
  entry: "./src/index.js",
  //出力先
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        // 拡張子 .js, mjs, jsx の場合
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
                // React の JSX を解釈
                "@babel/react",
              ],
            },
          },
        ],
      },
      {
        //sass用ローダー
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: true,
              // ソースマップを有効にする
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
              // ソースマップの利用有無
              sourceMap: enabledSourceMap
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        type: "asset/inline",
      },
    ],
  },
  //webpack-dev-server の設定
  devServer: {
    //ルートディレクトリの指定
    contentBase: path.join(__dirname, 'dist'),
    //サーバー起動時にブラウザを自動的に起動
    open: true,
    // ルートディレクトリのファイルを監視
    watchContentBase: true,
    // //バンドルされたファイルを出力する（実際に書き出す）
    // writeToDisk: true,
    // ポート番号を変更
    port: 3000
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"]
};
