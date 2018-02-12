import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import GroupSelector from '../../../intent/containers/GroupSelector'
import GroupMarkTable from '../../../intent/containers/GroupMarkTable'
import TopBar from './TopBar'

import styles from './App.module.css'

const getPath = group =>
  `/groups/${group.id}`

const App = ({history, state}) =>
  <ConnectedRouter history={history}>
    <div className={styles['app-container']}>
      <TopBar/>
      <div>
        <div>
          <GroupSelector/>
        </div>
      </div>
      <div>
        <div>
          <Route
            sensitive
            path='/groups/:id'
            component={GroupMarkTable}
            onEnter={(a) => { console.log(a) }}
          />
        </div>
      </div>
    </div>
  </ConnectedRouter>

export default App
