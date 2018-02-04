import {connect} from 'react-redux'
import MarkTable from '../../view/components/MarkTable'

const minDimensions = {
  rows: 40,
  columns: 30
}

const addColumnPadding = (items, paddingSize) =>
  [
    ...items,
    ...new Array(paddingSize)
      .fill({})
      .map(() => ({
        value: ' '
      }))
  ]

const addRowPadding = (rows, rowPaddingSize) =>
  [
    ...rows,
    ...new Array(rowPaddingSize)
      .fill({})
      .map(() =>
        // FIXME: This "+ 1" is ugly.
        addColumnPadding([], minDimensions.columns + 1)
      )
  ]

const getHeader = (resources, groupId) => {
  const activities = resources.activities
    .filter(activity =>
      activity.group_id === groupId
    )
    .map(activity => ({
      key: activity.id,
      value: activity.name
    }))

  const numActivities = activities.length
  const paddingSize = minDimensions.columns - numActivities
  return [
    {
      key: 0,
      value: 'Student'
    },
    ...addColumnPadding(activities, paddingSize)
  ]
}

const getStudentCell = student => ({
  key: student.id,
  value: `${student.surname}, ${student.name}`
})

const getAssessmentCell = activity => ({
  key: activity.id,
  value: ''
})

const getRows = (resources, groupId) => {
  const groupEnrolments = resources.enrolments
    .filter(enrolment =>
      enrolment.group_id === groupId
    )

  const enrolmentsWithStudents = groupEnrolments.map(enrolment => {
    const [ student ] = resources.students
      .filter(student =>
        student.id === enrolment.student_id
      )
    return Object.assign({}, enrolment, { student })
  })

  const studentComparator = (e0, e1) =>
    e0.student.surname.localeCompare(e1.student.surname)

  const sortedEnrolments = enrolmentsWithStudents.sort(studentComparator)
  const studentRows = sortedEnrolments
    .map(enrolment => {
      const { student } = enrolment
      const studentCell = getStudentCell(student)

      const activities = resources.activities
        .filter(activity =>
          activity.group_id === groupId
        )
        .map(getAssessmentCell)

      const numActivities = activities.length
      const paddingSize = minDimensions.columns - numActivities

      return [
        studentCell,
        ...addColumnPadding(activities, paddingSize)
      ]
    })

  const numStudents = studentRows.length
  const paddingSize = minDimensions.rows - numStudents

  return addRowPadding(studentRows, paddingSize)
}

const mapStateToProps = state => {
  const resources = state.resources
  const groupId = state.selectedGroupId
  const header = getHeader(resources, groupId)
  const rows = getRows(resources, groupId)
  return {header, rows}
}

const mapDispatchToProps = state => (
  {}
)

const GroupMarkTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkTable)

export default GroupMarkTable