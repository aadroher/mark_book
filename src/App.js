import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import mainTheme from './assets/styles/mainTheme'

import TopBar from './components/TopBar'
import GroupMarkTable from './containers/GroupMarkTable'

import './App.css'

const App = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(mainTheme)}>
    <div>
      <TopBar/>
      <div className='App'>
        <GroupMarkTable/>
      </div>
    </div>
  </MuiThemeProvider>

export default App
