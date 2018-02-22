import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './Stores/store';
import './index.css';
import App from './Containers/App';
import Main from './Components/Main';

ReactDOM.render(
  <Provider store={store}><Main/></Provider>,
  document.getElementById("root")
);

/**
 *  1. debounce in componentdidmount?
 */