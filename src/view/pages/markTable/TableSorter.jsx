import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/fontawesome-free-solid'

const TableSorter = props => {
  const icon = props.direction === 'asc'
    ? faSortDown
    : faSortUp

  const nextDirection = props.direction === 'asc'
    ? 'desc'
    : 'asc'
  const onClick = e => {
    e.preventDefault()
    props.onSorterClick(nextDirection)
  }
  return (
    <a
      href='#'
      {...{ onClick }}
    >
      <FontAwesomeIcon icon={faSortDown} />
    </a>
  )
}

export default TableSorter
