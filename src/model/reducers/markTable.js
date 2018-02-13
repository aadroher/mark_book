import {createAction, handleActions} from 'redux-actions'

import initialState from './initialState'

// Actions
const getActionName = name =>
  `mark_book/markTable/${name}`

const GROUP_SELECT = getActionName('GROUP_SELECT')
const SORT_DIRECTION_SET = getActionName('SORT_DIRECTION_SET')

const groupSelect = createAction(GROUP_SELECT)
const studentsSort = createAction(SORT_DIRECTION_SET)

// State


// Reducers

const setSortDirection = (state, action) => {
  const sortDirection = action.payload.direction
  return Object.assign({}, state, {
    sortDirection
  })
}

const reducer = handleActions({
  [SORT_DIRECTION_SET]: setSortDirection
}, initialState.markTable)


export {
  groupSelect,
  studentsSort
}

export default reducer