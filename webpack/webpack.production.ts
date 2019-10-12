const merge=require('webpack-merge');
const path=require('path');
const webpack=require('webpack');
const common=require('./webpack.common.ts');
const UglifyjsWebpackPlugin= require("uglifyjs-webpack-plugin");
module.exports=merge(common,{
	// devtool:"false",
	mode: 'production',
	plugins:[
		new UglifyjsWebpackPlugin({
      uglifyOptions: {
				warnings: false,
				
        compress: {
         
          drop_console: true,
        },
      },
      sourceMap: true,
			parallel: true
		}),
		new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
	]
})