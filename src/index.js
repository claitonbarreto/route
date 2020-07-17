import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
