import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store'
import {Provider} from 'react-redux'
import { saveToLocalStorage } from './utils/localStorage';
import 'bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => saveToLocalStorage(store.getState()));
