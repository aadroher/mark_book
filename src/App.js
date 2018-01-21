import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import mainTheme from './assets/styles/mainTheme'

import TopBar from  './components/TopBar'
import MarkTable from './components/MarkTable'

import './App.css'


const App = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(mainTheme)}>
    <TopBar/>
    <div className='App'>
      <MarkTable/>
    </div>
  </MuiThemeProvider>

export default App
