import React, {Component} from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/root'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import mainTheme from './assets/styles/mainTheme'

import TopBar from  './components/TopBar'
import MarkTable from './components/MarkTable'

import './App.css'

const store = createStore(rootReducer)

const App = () =>
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(mainTheme)}>
      <div>
        <TopBar/>
        <div className='App'>
          <MarkTable store={store} groupId={1}/>
        </div>
      </div>
    </MuiThemeProvider>
  </Provider>

export default App
