import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import configureStore from './configureStore';

const store = configureStore();
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root'));

registerServiceWorker();
