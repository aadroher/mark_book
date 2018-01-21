import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers/root'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const middleware = applyMiddleware(createLogger(), thunk)
const reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeWithParams = reduxDebugger
  ? compose(middleware, reduxDebugger)
  : compose(middleware)

const store = createStore(
  rootReducer,
  composeWithParams
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
