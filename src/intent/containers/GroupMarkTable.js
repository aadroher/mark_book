import React, {Component} from 'react'
import {connect} from 'react-redux'
import MarkTable from '../../view/pages/markTable/MarkTable'
import {groupSelect, studentsSort} from "../../model/stores/markTable"

const minDimensions = {
  rows: 40,
  columns: 30
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

class GroupMarkTable extends Component {

  componentDidMount() {
    const groupId = this.props.match.params.id
    this.props.selectGroup(groupId)
  }

  render() {
    return <MarkTable {...this.props}/>
  }

}

const mapStateToProps = ({ markTable }) =>
  [
    formatHeaders,
    formatStudentCells,
    addPadding
  ].reduce((markTable, f) =>
      f(markTable)
    , markTable)


const mapDispatchToProps = dispatch => ({
  selectGroup: id => {
    dispatch(groupSelect({id}))
    dispatch(studentsSort({direction: 'asc'}))
  }
})

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMarkTable)

export default container