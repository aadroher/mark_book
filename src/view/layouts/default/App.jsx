import React from 'react'
import GroupSelector from '../../../intent/containers/GroupSelector'
import GroupMarkTable from '../../../intent/containers/GroupMarkTable'
import TopBar from './TopBar'

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
