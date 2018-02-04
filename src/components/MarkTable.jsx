import React from 'react'

const tableHeader = header =>
  <thead>
    <tr>
      {header.map((cell, i) =>
        <th key={i} >
          {cell.value}
        </th>
      )}
    </tr>
  </thead>

const tableBody = rows =>
  <tbody>
    {rows
      .map((row, i) =>
        <tr key={i}>
          {
            row.map((cell, j) =>
              <td key={j}>
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
    <table>
      {tableHeader(header)}
      {tableBody(rows)}
    </table>
  )
}


export default MarkTable