import React, {Component} from 'react'
import {connect} from 'react-redux'
import MarkTable from '../../view/pages/markTable/MarkTable'

const minDimensions = {
  rows: 40,
  columns: 30
}

const getGroupEnrolments = (resources, selectedGroupId) =>
  resources.enrolments
    .filter(enrolment => {
      return enrolment.groupId === selectedGroupId
    })

const getHeader = (resources, groupId) =>
  resources.activities
    .filter(activity =>
      activity.groupId === groupId
    )

const getAssessmentCell = activity => ({
  value: ''
})

const getStudentRows = (resources, selectedGroupId, groupEnrolments) => {
  const enrolmentsWithStudents = groupEnrolments.map(enrolment => {
    const [student] = resources.students
      .filter(student =>
        student.id === enrolment.studentId
      )
    return Object.assign({}, enrolment, {student})
  })

  return enrolmentsWithStudents
    .map(enrolment => {
      const {student} = enrolment
      const activities = resources.activities
        .filter(activity =>
          activity.groupId === selectedGroupId
        )
        .map(getAssessmentCell)
      return [student, ...activities]
    })
}

const getActivityCell = activity => ({
  value: activity.name
})

const addStudentsColumn = header =>
  [
    {
      value: 'Student'
    },
    ...header
  ]

const formatHeaders = markTable =>
  Object.assign({}, markTable, {
    header: addStudentsColumn(
      markTable.header.map(getActivityCell)
    )
  })

const getStudentCell = student => ({
  value: `${student.surname}, ${student.name}`
})

const formatStudentCells = markTable =>
  Object.assign({}, markTable, {
    rows: markTable.rows.map(row => {
      const [student, assessments] = row
      return [
        getStudentCell(student),
        ...assessments
      ]
    })
  })

const addColumnPadding = (items, paddingSize) =>
  [
    ...items,
    ...new Array(paddingSize)
      .fill({})
      .map(() => ({
        value: ' '
      }))
  ]

const addRowPadding = (rows, rowPadding) => {
  return [
    ...rows,
    ...(new Array(rowPadding).fill([]))
  ]
}

const addPadding = markTable => {
  const numActivities = markTable.header.length
  const headerColumnPadding = minDimensions.columns - numActivities
  const rowPadding = minDimensions.rows - markTable.rows.length

  const header = addColumnPadding(markTable.header, headerColumnPadding)

  const rows = addRowPadding(markTable.rows, rowPadding)
    .map(row => {
      const columnPadding = minDimensions.columns - row.length
      return addColumnPadding(row, columnPadding)
    })

  return {header, rows}
}

const getMarkTable = ({ markTable, resources }, match) => {
  const groupId = parseInt(((match || {}).params || {}).id)
  const groupEnrolments = getGroupEnrolments(resources, groupId)
  const header = getHeader(resources, groupId)
  const rows = getStudentRows(resources, groupId, groupEnrolments)

  return {header, rows}
}

const mapStateToProps = (state, { match }) =>
  [
    formatHeaders,
    formatStudentCells,
    addPadding
  ].reduce((markTable, f) =>
      f(markTable)
    , getMarkTable(state, match))


const mapDispatchToProps = dispatch => ({})

const GroupMarkTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkTable)

export default GroupMarkTable