import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';

import store from './store/store';

import App from './components/App';

// for testing mailer
import axios from 'axios';
window.axios = axios;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
