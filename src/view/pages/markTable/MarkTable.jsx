import React from 'react'
import styles from './MarkTable.module.css'
import MarkTableSorter from '../../../intent/containers/MarkTableSorter'
import StudentCell from '../../../intent/containers/StudentCell'
import EditableCell from './EditableCell'

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
    <th className={styles['row-num-column']}>
      <MarkTableSorter/>
    </th>
    {
      header.map((cell, i) =>
        i === 0
          ? <StudentsHeader cell={cell} key={i}/>
          : <ActivityHeader cell={cell} key={i}/>
      )
    }
  </tr>
  </thead>

const RowNumCell = ({i}) =>
  <td className={styles['row-num-column']}>
    {i}
  </td>

const MarkCell = ({cell}) =>
  <td>
    {cell.value}
  </td>

const TableBody = ({rows}) =>
  <tbody>
  {rows
    .map((row, i) =>
      <tr key={i}>
        <RowNumCell i={i + 1}/>
        {
          row.map((cell, j) => {
            const updatedCell = Object.assign(cell, {
              coordinates: {
                column: j,
                row: i
              }
            })
            const key = `${j}-${i}`
            return j === 0
              ? <StudentCell cell={updatedCell} key={key}/>
              : <MarkCell cell={updatedCell} key={key}/>
          })
        }
      </tr>
    )
  }
  </tbody>


const MarkTable = props => {
  return (
    <table className={styles['mark-table']}>
      <Header {...props}/>
      <TableBody {...props}/>
    </table>
  )
}


export default MarkTable