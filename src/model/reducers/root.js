import { combineReducers } from 'redux'
import { routerReducer as router} from 'react-router-redux'
import markTable from './markTable'
import resources from './resources'


const rootReducer = combineReducers({
  markTable,
  resources,
  router
})


export default rootReducer