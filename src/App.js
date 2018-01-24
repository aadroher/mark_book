import React, {Component} from 'react'

import TopBar from './components/TopBar'
import GroupSelector from './containers/GroupSelector'
import GroupMarkTable from './containers/GroupMarkTable'

import './App.css'

const App = () =>
  <div>
    <TopBar/>
    <div className='app-container'>
      <div className='row'>
        <div className='col'>
          <GroupSelector/>
        </div>
      </div>
      <div>
        <div className='row'>
          <div className='col'>
            <GroupMarkTable/>
          </div>
        </div>
      </div>
    </div>
  </div>


export default App
