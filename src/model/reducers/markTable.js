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
const getGroupEnrolments = (state, selectedGroupId) =>
  state.resources.enrolments
    .filter(enrolment =>
      enrolment.groupId === selectedGroupId
    )

const getHeader = (state, groupId) =>
  state.resources.activities
    .filter(activity =>
      activity.groupId === groupId
    )

const getAssessmentCell = activity => ({
  value: ''
})

const getStudentRows = (state, groupEnrolments) => {

  const enrolmentsWithStudents = groupEnrolments.map(enrolment => {
    const [student] = state.resources.students
      .filter(student =>
        student.id === enrolment.studentId
      )
    return Object.assign({}, enrolment, {student})
  })

  return enrolmentsWithStudents
    .map(enrolment => {
      const {student} = enrolment
      const activities = state.resources.activities
        .filter(activity =>
          activity.groupId === state.selectedGroupId
        )
        .map(getAssessmentCell)
      return [student, ...activities]
    })

}

const updateMarkTable = (state, action) => {
  const selectedGroupId = action.payload.id
  const groupEnrolments = getGroupEnrolments(state, selectedGroupId)
  const header = getHeader(state, selectedGroupId)
  const rows = getStudentRows(state, groupEnrolments)

  const markTable = Object.assign({}, state.markTable, {header, rows})

  return Object.assign({}, state, {
    selectedGroupId,
    markTable
  })
}

const sortRowsByStudentName = (state, action) => {
  const direction = action.payload.direction
  const sortStudentComparator = (s0, s1) => {
    const precedence = direction === 'asc'
      ? {fst: s0, snd: s1}
      : {fst: s1, snd: s0}
    return precedence.fst.surname.localeCompare(
      precedence.snd.surname
    )
  }

  const sortDirection = direction
  const rows = [...state.rows].sort((r0, r1) => {
    const [s0] = r0
    const [s1] = r1
    return sortStudentComparator(s0, s1)
  })

  return Object.assign({}, state, {
    markTable: Object.assign({}, state, {
      sortDirection,
      rows
    })
  })
}

const selectGroup = (state, action) => {
  const selectedGroupId = action.payload.id
  return Object.assign({}, state, {
    selectedGroupId
  })
}

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