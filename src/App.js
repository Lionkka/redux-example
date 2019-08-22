import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from './reducers'
import List from './componets/List'
import Form from './componets/Form'

import './App.css';

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp,
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        )))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Form/>
          <List/>
      </div>
    </Provider>
  );
}

export default App;
