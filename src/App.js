import React, {Component} from 'react'

import TopBar from './components/TopBar'
import GroupSelector from './containers/GroupSelector'
import GroupMarkTable from './containers/GroupMarkTable'

const App = () =>
  <div className='app'>
    <GroupSelector/>
    <div>
      <GroupMarkTable/>
    </div>
  </div>

export default App
