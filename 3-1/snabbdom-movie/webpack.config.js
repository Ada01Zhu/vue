const path = require('path')
module.exports =  {
    entry: './src/01basicusage.js',
    mode: 'development',
    output: {
        filename: 'mian.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/i,
            loader: 'babel-loader',
            options: {
              // 仅仅是使用 babel-loader 是不会转换的， 还要设置 presets
              presets: ["@babel/preset-env"]
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: "url-loader",
            options:{
              limit: 10 * 1024, // 10Kb 一下的资源内联
            }
          },
        ],
      },
}