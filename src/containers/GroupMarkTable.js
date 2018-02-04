import {connect} from 'react-redux'
import MarkTable from '../components/MarkTable'

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
  const enrolments = resources.enrolments
    .filter(enrolment =>
      enrolment.group_id === groupId
    )
    .map(enrolment => {
      const [student] = resources.students
        .filter(student =>
          student.id === enrolment.student_id
        )
        .map(getStudentCell)

      const activities = resources.activities
        .filter(activity =>
          activity.group_id === groupId
        )
        .map(getAssessmentCell)

      const numActivities = activities.length
      const paddingSize = minDimensions.columns - numActivities

      return [
        student,
        ...addColumnPadding(activities, paddingSize)
      ]
    })

  const numEnrolments = enrolments.length
  const paddingSize = minDimensions.rows - numEnrolments

  return addRowPadding(enrolments, paddingSize)
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