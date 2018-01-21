import {connect} from 'react-redux'
import MarkTable from '../components/MarkTable'

const getHeader = (resources, groupId) =>
  [
    {
      key: 0,
      value: 'Student'
    },
    ...resources.activities
      .filter(activity =>
        activity.id === groupId
      )
      .map(activity => ({
        key: activity.id,
        value: activity.name
      }))
  ]

const getStudentCell = student => ({
  key: student.id,
  value: `${student.surname}, ${student.name}`
})

const getAssessmentCell = activity => ({
  key: activity.id,
  value: ''
})

const getRows = (resources, groupId) =>
  resources.enrolments
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
          activity.id === groupId
        )
        .map(getAssessmentCell)

      return [student, ...activities]
    })

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