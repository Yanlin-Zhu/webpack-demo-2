import './css/common.css';
import Layer from './components/layer/layer.js'
const App = function(){
	var dom = document.getElementById('app');
	var layer = new Layer();
	// dom.innerHTML = layer.templ;
	dom.innerHTML = layer.templ({
		name:'zhuzhu',
		arr:['a','b','c']
	})
}
new App()