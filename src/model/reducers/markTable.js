import {createAction, handleActions} from 'redux-actions'

import initialState from './initialState'

// Actions
const getActionName = name =>
  `mark_book/markTable/${name}`

const SORT_DIRECTION_SET = getActionName('SORT_DIRECTION_SET')
const STUDENT_CELL_EDIT = getActionName('STUDENT_CELL_EDIT')

const studentsSort = createAction(SORT_DIRECTION_SET)
const studentCellEdit = createAction(STUDENT_CELL_EDIT)

// State


// Reducers

const setSortDirection = (state, action) => {
  const sortDirection = action.payload.direction
  return Object.assign({}, state, {
    sortDirection
  })
}

const setEditionCellCoordinates = (state, action) =>
  Object.assign({}, state, {
    editionCellCoordinates: action.payload.coordinates
  })

const reducer = handleActions({
  [SORT_DIRECTION_SET]: setSortDirection,
  [STUDENT_CELL_EDIT]: setEditionCellCoordinates
}, initialState.markTable)


export {
  studentsSort,
  studentCellEdit
}

export default reducer