import React from 'react'
import styles from './TableSorter.module.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/fontawesome-free-solid'

const TableSorter = props => {

  const icon = faCaretUp

  const rotationString =
    props.direction === 'asc'
      ? ''
      : 'rotate-180'
  const transformString = `down-6 ${rotationString}`

  const onClick = e => {
    e.preventDefault()
    props.onSorterClick(props.nextDirection)
  }

  return (
    <button
      type='button'
      className={styles['table-sorter']}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={icon}
        // rotation={rotationDeg}
        transform={transformString}

      />
    </button>
  )
}

export default TableSorter
