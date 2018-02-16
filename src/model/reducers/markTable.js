import {createAction, handleActions} from 'redux-actions'

import initialState from './initialState'

// Actions
const getActionName = name =>
  `mark_book/markTable/${name}`

const SORT_DIRECTION_SET = getActionName('SORT_DIRECTION_SET')
const STUDENT_CELL_START_EDIT = getActionName('STUDENT_CELL_START_EDIT')
const STUDENT_CELL_UPDATE = getActionName('STUDENT_CELL_CHANGE_VALUE')
const STUDENT_CELL_END_EDIT = getActionName('STUDENT_CELL_END_EDIT')


const studentsSort = createAction(SORT_DIRECTION_SET)
const studentCellStartEdit = createAction(STUDENT_CELL_START_EDIT)
const studentCellUpdate = createAction(STUDENT_CELL_UPDATE)
const studentCellEndEdit = createAction(STUDENT_CELL_END_EDIT)


// State


// Reducers

const setSortDirection = (state, action) => {
  const sortDirection = action.payload.direction
  return Object.assign({}, state, {
    sortDirection
  })
}

const setEditionCell = (state, action) =>
  Object.assign({}, state, {
    editionCell: action.payload.cell
  })

const updateEditionCell = (state, action) => state

const clearEditionCell = (state, action) =>
  Object.assign({}, state,
    {
      student: {
        id: null
      },
      coordinates: {
        column: null,
        row: null
      }
    }
  )

const reducer = handleActions({
  [SORT_DIRECTION_SET]: setSortDirection,
  [STUDENT_CELL_START_EDIT]: setEditionCell,
  [STUDENT_CELL_UPDATE]: updateEditionCell,
  [STUDENT_CELL_END_EDIT]: clearEditionCell
}, initialState.markTable)


export {
  studentsSort,
  studentCellStartEdit,
  studentCellUpdate,
  studentCellEndEdit,
}

export default reducer