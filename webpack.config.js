var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry:'./src/app.js',
	output:{
		path:__dirname + '/dist',
		filename:'js/[name].bundle.js',
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				// npm install --save-dev babel-loader babel-core
				use: [
					{
						loader:'babel-loader',
						options:{
							presets:['es2015']
							// npm install --save-dev babel-preset-es2015
						}
					}
				],
				// 排除处理文件指定处理文件范围加快速度(绝对路径，也可以正则)
				exclude:path.resolve(__dirname,'/node_modules/'),
              	// include:path.resolve(__dirname,'/src'),
              	include:/\.src\//
            },
			// npm i style-loader css-loader --save-dev
			// npm install postcss-loader --save-dev
			// npm install postcss-import --save-dev
			// npm install autoprefixer --save-dev踏实postcss的插件用于自动添加浏览器兼容前缀
			{
				test:/\.css$/,
				// loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
				use:['style-loader',{ loader: 'css-loader', options: { importLoaders: 1 } },'postcss-loader']
			},
			// npm install less -g
			// npm i less-loader --save-dev
			{
				test:/\.less$/,
				// loader:'style-loader!css-loader!postcss-loader!less-loader'
				use:['style-loader','css-loader','postcss-loader','less-loader']
			},
			// npm install html-loader --save-dev
			{
				test:/\.html$/,
				use:['html-loader']
			},
			//npm install ejs-loader --save-dev
			{
				test:/\.ejs$/,
				use:['ejs-loader']

			}
		]
	},
	// 单页面应用
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}