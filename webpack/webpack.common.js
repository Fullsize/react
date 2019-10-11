const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const os = require('os');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const Happypack = require("happypack");
const FirendlyErrorePlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require("autoprefixer");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()
const atImport= require( 'postcss-import');
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length });
module.exports = {
	mode:'development',
	// 入口文件
	entry: {
		// uni:["@babel/polyfill",path.resolve(__dirname, "../main.js")]
		uni: path.resolve(__dirname, "../main.tsx")
	},

	//出口文件
	output: {
		// 出口地址
		path: path.resolve(__dirname, "../dist"),
		// 文件名字
		filename: "js/[name]-[hash].js"
	},

	// 解析
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json','.mjs'],
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	},
	// 插件
	plugins: [
		// 自动生成html,并默认将打包生成的js、css引入到html文件中
		new HtmlWebpackPlugin({
			template: "index.html", //模板文件
			filename: "index.html", //目标文件
			chunks: ["uni"], //对应加载的资源
			inject: true, //资源加入到底部
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		}),
		// 声明变量
		new webpack.EnvironmentPlugin(["ENVIRONMENT"]),

		// 每次启动删除打包后的文件
		new CleanWebpackPlugin(),

		// 每次以进度条形式,反馈打包进度
		new ProgressBarPlugin(),

		// 更好查看错误和警告
		new FirendlyErrorePlugin(),

		// 将css抽离
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css',
		}),
		// 多线程编译
		new Happypack({
			id: 'babel',
			loaders: [{
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
				}
			}],
			threadPool: happyThreadPool,
		}),
		new Happypack({
			id: 'eslint',
			loaders: [{
				loader: 'eslint-loader'
			}],
			threadPool: happyThreadPool,
		})

	],
	// 加载器
	module: {
		rules: [{
			enforce: "pre",
			test: /\.(js|jsx)$/,
			loaders: ['happypack/loader?id=eslint'],
			include: path.resolve(__dirname, '../src'),
			exclude: /node_modules/
		},
		{
			test: /\.(js|jsx|ts|tsx)$/,
			loaders: ['happypack/loader?id=babel'],
			include: path.resolve(__dirname, '../src'),
			exclude: /node_modules/,
			
		},
		{
			test: /\.ts(x?)$/,
			loaders: ['ts-loader'],
		},
		{
			test: /\.(css|scss)$/,
			use: [
				process.env.ENVIRONMENT === "development" ?
					'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						// modules: {
						// 	localIdentName: '[path][name]__[local]--[hash:base64:5]',
						// },
						// importLoaders:1,
						// import: true,
						// sourceMap:true
					}
				},
				
				'sass-loader',
				{
					loader: "postcss-loader",
					options: {
						ident: "postcss",
						sourceMap: true,
						plugins: [atImport,autoprefixer({
							browsers: ["last 2 versions"]
						})]
					}
				},
			]
		},
		{
			test: /\.(gif|png|jpe?g)$/i,
			use: [{
				loader: "url-loader",
				options: {
					limit: 20480
				}
			}]
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf|ico)$/,
			use: [
				'file-loader'
			]
		}
		]
	}
}