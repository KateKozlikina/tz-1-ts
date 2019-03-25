import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/index';
import { RoutedApp } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store = {store}>
    <RoutedApp />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
