import React from 'react'
import GroupSelector from './containers/GroupSelector'
import GroupMarkTable from './containers/GroupMarkTable'

import './App.css'

const App = () =>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col'>
        <GroupSelector/>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <GroupMarkTable/>
      </div>
    </div>
  </div>



export default App
