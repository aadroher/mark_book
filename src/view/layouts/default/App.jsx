import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import GroupSelector from '../../../intent/containers/GroupSelector'
import GroupMarkTable from '../../../intent/containers/GroupMarkTable'
import TopBar from './TopBar'

import styles from './App.module.css'

const App = ({ history }) =>
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
            path='/groups/:id'
            children={props => <GroupMarkTable {...props} />}
          />
        </div>
      </div>
    </div>
  </ConnectedRouter>

export default App
