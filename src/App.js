import React from 'react'
import GroupSelector from './containers/GroupSelector'
import GroupMarkTable from './containers/GroupMarkTable'
import TopBar from './components/TopBar'

import styles from './App.module.css'

const App = () =>
  <div className={styles['app-container']}>
    <TopBar/>
    <div>
      <div>
        <GroupSelector/>
      </div>
    </div>
    <div>
      <div>
        <GroupMarkTable/>
      </div>
    </div>
  </div>



export default App
