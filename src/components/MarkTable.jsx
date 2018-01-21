import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const tableHeader = activities =>
  <TableHeader>
    <TableRow>
      <TableHeaderColumn>
        Name
      </TableHeaderColumn>
      {activities.map(activity =>
        <TableHeaderColumn>
          {activity.name}
        </TableHeaderColumn>
      )}
    </TableRow>
  </TableHeader>

const getRows = (state, groupId) =>
  state.enrolments
    .filter(enrolment =>
      enrolment.group_id === groupId
    )
    .map(enrolment => {
      const student = state.students
        .find(student =>
          student.id === enrolment.student_id
        )
      const activities = state.activities
        .filter(activity =>
          activity.id === groupId
        )

      return [student, ...activities]
    })

const tableBody = (state, groupId) =>
  <TableBody>
    {
      getRows(state, groupId)
        .map(row =>
          <TableRow>
            {
              row.map(cell =>
                <TableRowColumn>
                  {JSON.stringify(cell)}
                </TableRowColumn>
              )
            }
          </TableRow>
        )
    }
  </TableBody>


const MarkTable = props => {
  console.log(props.store.getState())
  const state = props.store.getState()
  const groupId = props.groupId
  const activities = state.activities
    .filter(activity =>
      activity.id === groupId
    )
  return (
    <Table>
      {tableHeader(activities)}
      {tableBody(state, groupId)}
    </Table>
  )
}


export default MarkTable