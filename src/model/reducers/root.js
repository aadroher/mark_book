import types from '../../intent/actions/types'
import initialState from '../store/initialState'

const getHeader = (state, groupId) => {
  const activities = state.resources.activities
    .filter(activity =>
      activity.group_id === groupId
    )
    .map(activity => ({
      value: activity.name
    }))

  return [
    {value: 'Student'},
    ...activities
  ]
}


const getAssessmentCell = activity => ({
  value: ''
})

const getStudentRows = (state, groupEnrolments) => {

  const enrolmentsWithStudents = groupEnrolments.map(enrolment => {
    const [student] = state.resources.students
      .filter(student =>
        student.id === enrolment.student_id
      )
    return Object.assign({}, enrolment, {student})
  })

  return enrolmentsWithStudents
    .map(enrolment => {
      const {student} = enrolment
      const activities = state.resources.activities
        .filter(activity =>
          activity.group_id === state.selectedGroupId
        )
        .map(getAssessmentCell)
      return [student, ...activities]
    })

}

const selectGroup = (state, selectedGroupId) => {
  const groupEnrolments = state.resources.enrolments
    .filter(enrolment =>
      enrolment.group_id === selectedGroupId
    )

  const header = getHeader(state, selectedGroupId)
  const rows = getStudentRows(state, groupEnrolments)

  const markTable = Object.assign({}, state.markTable, {header, rows})

  return Object.assign({}, state, {
    selectedGroupId,
    markTable
  })
}

const sortRowsByStudentName = (state, direction) => {
  const sortStudentComparator = (s0, s1) => {
    const precedence = direction === 'asc'
      ? {fst: s0, snd: s1}
      : {fst: s1, snd: s0}
    return precedence.fst.surname.localeCompare(
      precedence.snd.surname
    )
  }

  const sortDirection = direction
  const rows = [...state.markTable.rows].sort((r0, r1) => {
    const [s0] = r0
    const [s1] = r1
    return sortStudentComparator(s0, s1)
  })

  return Object.assign({}, state, {
    markTable: Object.assign({}, state.markTable, {
      sortDirection,
      rows
    })
  })
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_GROUP:
      return selectGroup(state, action.payload.id)
    case types.SORT_STUDENTS:
      return sortRowsByStudentName(state, action.payload.direction)
    default:
      return Object.assign({}, state)
  }
}

export default rootReducer