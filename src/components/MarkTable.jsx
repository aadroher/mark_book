import React from 'react'

const tableHeader = header =>
  <thead
    displaySelectAll={false}
    adjustForCheckbox={false}>
    <tr>
      {header.map(cell =>
        <th
          key={cell.key}
        >
          {cell.value}
        </th>
      )}
    </tr>
  </thead>

const tableBody = rows =>
  <tbody
    displayRowCheckbox={false}>
    {rows
      .map((row, i) =>
        <tr key={i}>
          {
            row.map(cell =>
              <td key={cell.key}>
                {cell.value}
              </td>
            )
          }
        </tr>
      )
    }
  </tbody>



const MarkTable = props => {
  const header = props.header
  const rows = props.rows
  return (
    <table
      selectable={false}
    >
      {tableHeader(header)}
      {tableBody(rows)}
    </table>
  )
}


export default MarkTable