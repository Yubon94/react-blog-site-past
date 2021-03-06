// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  // CSSの元ソースを追跡するため, source-map方式に設定
  devtool: "source-map",

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
              // develop環境ではソースマップを有効にする
              sourceMap: enabledSourceMap,
            }
          },
          //Sass内のurl()の機能を有効化するローダー
          {
            loader: 'resolve-url-loader',
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
              sourceMap: true, //resolve-url-loaderを機能させるために有効化。
              sourceMapContents: false  //コンテンツは不要なので無効化
            },
          },
        ],
      },
      //画像をdist内に読み込み
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //フォントの読み込み
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
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
