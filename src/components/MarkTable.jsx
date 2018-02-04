import React from 'react'

import styles from './MarkTable.module.css'

const StudentsHeader = ({cell}) =>
  <th scope='col' className={styles['student-column']}>
    {cell.value}
  </th>

const ActivityHeader = ({cell}) =>
  <th scope='col' className={styles['rotated']}>
    <div>
      <span>
        {cell.value}
      </span>
    </div>
  </th>

const Header = ({header}) =>
  <thead>
    <tr>
      {
        header.map((cell, i) =>
          i === 0
            ? <StudentsHeader cell={cell} key={i}/>
            : <ActivityHeader cell={cell} key={i}/>
        )
      }
    </tr>
  </thead>

const StudentCell = ({cell}) =>
  <th scope='row' className={styles['student-column']}>
    {cell.value}
  </th>

const MarkCell = ({cell}) =>
  <td>
    {cell.value}
  </td>

const tableBody = rows =>
  <tbody>
    {rows
      .map((row, i) =>
        <tr key={i}>
          {
            row.map((cell, j) =>
              j === 0
                ? <StudentCell {...{cell}} key={`${i}-${j}`}/>
                : <MarkCell {...{cell}} key={`${i}-${j}`}/>
            )
          }
        </tr>
      )
    }
  </tbody>


const MarkTable = props => {
  // const header = props.header
  const rows = props.rows
  return (
    <table className={styles['mark-table']}>
      <Header {...props}/>
      {tableBody(rows)}
    </table>
  )
}


export default MarkTable