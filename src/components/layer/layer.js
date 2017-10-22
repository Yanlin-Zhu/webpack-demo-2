// import templ from './layer.html'作为字符串引入模板
import templ from './layer.ejs'//作为函数引入模板
import './layer.less'
function layer(){
	return {
		name:'layer',
		templ:templ
	}
}
export default layer;