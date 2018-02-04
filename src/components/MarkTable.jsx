import React from 'react'
import styled from 'styled-jss'

const StyledTable = styled('table')({
  'border': 'solid',
  '> row': {
    'border': 'solid'
  }
})

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
    <StyledTable>
      {tableHeader(header)}
      {tableBody(rows)}
    </StyledTable>
  )
}


export default MarkTable