import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const MarkTable = () =>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn>
          Activity 1
        </TableHeaderColumn>
        <TableHeaderColumn>
          Activity 2
        </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>
          Russell, Bertrand
        </TableRowColumn>
        <TableRowColumn>
          A+
        </TableRowColumn>
        <TableRowColumn>
          8.25
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>


export default MarkTable