import React from 'react'
import styles from './MarkTable.module.css'
import MarkTableSorter from '../../../intent/containers/MarkTableSorter'

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

const StudentCell = ({cell}) =>
  <td className={styles['student-column']}>
    {cell.value}
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
  return (
    <table className={styles['mark-table']}>
      <Header {...props}/>
      <TableBody {...props}/>
    </table>
  )
}


export default MarkTable