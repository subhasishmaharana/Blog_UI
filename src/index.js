import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import {startSetPost} from './actions/posts'
import {startSetUser} from './actions/users'
import {startSetComment} from './actions/comments'


const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(startSetUser())
store.dispatch(startSetPost())
store.dispatch(startSetComment())

const jsx = (
    <Provider store= {store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

