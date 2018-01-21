import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const tableHeader = header =>
  <TableHeader
    displaySelectAll={false}
    adjustForCheckbox={false}>
    <TableRow>
      {header.map(cell =>
        <TableHeaderColumn
          key={cell.key}
        >
          {cell.value}
        </TableHeaderColumn>
      )}
    </TableRow>
  </TableHeader>

const tableBody = rows =>
  <TableBody
    displayRowCheckbox={false}>
    {rows
      .map((row, i) =>
        <TableRow key={i}>
          {
            row.map(cell =>
              <TableRowColumn key={cell.key}>
                {cell.value}
              </TableRowColumn>
            )
          }
        </TableRow>
      )
    }
  </TableBody>



const MarkTable = props => {
  const header = props.header
  const rows = props.rows
  return (
    <Table
      selectable={false}
    >
      {tableHeader(header)}
      {tableBody(rows)}
    </Table>
  )
}


export default MarkTable