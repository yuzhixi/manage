const path = require('path');
const webpack  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/app.js'
  },
  resolve: {
    alias: {
        page: path.resolve(__dirname, 'src/page'),
        component: path.resolve(__dirname, 'src/component'),
        util: path.resolve(__dirname, 'src/util')
    }
  },
  module: {
    rules: [
        {
            test: /\.m?jsx$/,
            exclude: /(node_modules)/,
            use: {
            loader: 'babel-loader',
            options: {
                //env会根据node或浏览器环境自动配置打包
                presets: ['env', 'react']
            }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }
            ]
        }
    ]
  },
  plugins: [
      //处理独立文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 独立css文件
        new ExtractTextPlugin('css/[name].css'),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ],
    devServer: {
        port: 8086,
        historyApiFallback: {
            index: '/dist/index.html',
        },
        proxy: {
            '/manage': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            }
        }
        // contentBase: './dist'
    }
};