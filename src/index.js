import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//添加路由文件，使用BrowserRouter,HashRouter
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
