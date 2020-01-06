import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducers'
{/* axios.interceptors.request.use(req =>{
    console.log("success111",req)
    return req
}, error =>{
    console.log("req error",error)
    return error

});

axios.interceptors.response.use(res =>{
    console.log("res!!",res)
    return res
}, error =>{
    console.log("Errorrrrr",error)
    return error

});*/}
const store = createStore(reducer)
const app =(
    <Provider store={store}>
    < BrowserRouter >
            <App/>
        </BrowserRouter >
        </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
