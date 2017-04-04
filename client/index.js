import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp.js';
import App from './containers/App.jsx';
import style from './styles.scss';
import * as localStorageStore from './localStorageService';
import { BrowserRouter, Route } from 'react-router-dom';

const persistedStore = localStorageStore.getData();
const store = createStore(
  todoApp,
  persistedStore
);

const onStoreChange = () => {
  localStorageStore.saveData(store.getState());
};

store.subscribe(onStoreChange);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);