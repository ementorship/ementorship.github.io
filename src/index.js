import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './static/css/external/bootstrap.css';
import './static/css/external/font-awesome.css';
import './static/css/external/simple-line-icons.css';
import './static/css/fonts/roboto-webkit/stylesheet.css';
import './static/css/fonts/worksanse-webkit/stylesheet.css';
import './static/css/common-style.css';
import './static/css/tricky-bootstrap.css';

import AppRoute from './routes';
import allReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import getApi from './middleware/getApi'


const store = createStore(allReducers,applyMiddleware(thunkMiddleware, getApi) );

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
