import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import mainTheme from './assets/styles/mainTheme'

import logo from './assets/img/logo.svg'
import './App.css'


const TopBar = () =>
  <AppBar
    title = 'Marker'
  />


const App = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(mainTheme)}>
    <TopBar/>
    <div className='App'>
      <p className='App-intro'>
        Cool contents go here.
      </p>
    </div>
  </MuiThemeProvider>

export default App
