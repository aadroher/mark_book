import React from 'react'
import styles from './TableSorter.module.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/fontawesome-free-solid'

const TableSorter = props => {

  const icon = props.direction === 'asc'
    ? faSortDown
    : faSortUp

  const onClick = e => {
    e.preventDefault()
    props.onSorterClick(props.nextDirection)
  }

  return (
    <a
      href='#'
      className={styles['table-sorter']}
      {...{ onClick }}
    >
      <FontAwesomeIcon
        icon={icon}
      />
    </a>
  )
}

export default TableSorter
