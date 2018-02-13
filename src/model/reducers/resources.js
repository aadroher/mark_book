import initialState from './initialState'
import {handleActions} from 'redux-actions'

const reducer = handleActions({}, initialState.resources)

export default reducer