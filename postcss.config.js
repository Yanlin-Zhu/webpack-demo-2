module.exports = {
    plugins: [
    	require('postcss-import')(),
        require('autoprefixer')({ browers:['last 5 versions'] })// 定义浏览器版本为最近的5个 
        
    ]
}