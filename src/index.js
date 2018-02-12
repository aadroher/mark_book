import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import rootReducer from './model/reducers/root'

import './view/styles/index.css'
import App from './view/layouts/default/App'
import registerServiceWorker from './registerServiceWorker'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)

const middleware = applyMiddleware(
  createLogger(),
  thunk,
  routerMiddleware(history)
)
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
    <App history={history} state={store.getState()} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
