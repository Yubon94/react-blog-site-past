module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",
  
    module: {
      rules: [
        {
          // 拡張子 .js の場合
          test: /\.js$/,
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
                  "@babel/react"
                ]
              }
            }
          ]
        }
      ]
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
  };