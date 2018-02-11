import types from './types'
import {createAction, handleAction, handleActions} from 'redux-actions'

const selectGroup = createAction(types.SELECT_GROUP)
const sortStudents = createAction(types.SORT_STUDENTS)

export {
  selectGroup,
  sortStudents
}