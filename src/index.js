import './styles/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store'
import {Provider} from 'react-redux'
import { saveToLocalStorage } from './utils/localStorage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => saveToLocalStorage(store.getState()));
