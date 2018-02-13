import React from 'react'
import styles from './EditableCell.module.css'


const EditableCell = ({cell, onStudentCellClick}) =>
  <td
    className={styles['student-cell']}
    onClick={e => {
      const {coordinates} = cell
      onStudentCellClick({coordinates})
    }}
  >
    {
      cell.isInEditionMode
        ? <input type='text' value={cell.value} onChange={(e) => {console.log(e.target)}}/>
        : cell.value
    }
  </td>

export default EditableCell
