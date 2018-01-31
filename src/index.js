import React from 'react'
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Routers from './router/router';
import configureStore from './store/store';
import 'bootstrap/dist/css/bootstrap.css'


const Store = configureStore();



//最终渲染
ReactDom.render(
	<Provider store={Store}>
		 <Routers/>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
