const path=require('path');
const webpack=require('webpack');
const common=require('./webpack.common.ts');
const merge=require('webpack-merge');

module.exports=merge(common,{
	devServer:{
		host: "0.0.0.0", //地址
		port: 3000, //端口
		inline: true, // 实时刷新
		open: false, //自动打开浏览器
		// hot: true,
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true
	}
})