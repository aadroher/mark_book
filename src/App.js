import React, {Component} from 'react'

import TopBar from './components/TopBar'
import GroupSelector from './containers/GroupSelector'
import GroupMarkTable from './containers/GroupMarkTable'

import './App.css'

const App = () =>
  <div>
    <TopBar/>
    <div className="app-container">
      <div>
        <div>
          <GroupSelector/>
          <div className='App'>
            <GroupMarkTable/>
          </div>
        </div>
      </div>
    </div>
  </div>


export default App
