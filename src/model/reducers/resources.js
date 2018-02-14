import initialState from './initialState'
import {createAction, handleActions} from 'redux-actions'

// Actions
const getActionName = name =>
  `mark_book/resources/${name}`

const STUDENT_UPDATE = getActionName('STUDENT_UPDATE')

const studentUpdate = createAction(STUDENT_UPDATE)

// Reducers

const updateStudent = (state, action) => {
  const {students} = state
  // console.log(students)
  const updatedStudent = action.payload.student
  const newStudents = students.map(student =>
    student.id === updatedStudent.id
      ? updatedStudent
      : student
  )
  return Object.assign({}, state, {
    students: newStudents
  })
}

const reducer = handleActions({
  [STUDENT_UPDATE]: updateStudent
}, initialState.resources)

export {
  studentUpdate
}

export default reducer