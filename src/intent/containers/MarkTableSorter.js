import {connect} from 'react-redux'
import TableSorter from '../../view/pages/markTable/TableSorter'
import {studentsSort} from '../../model/stores/markTable'

const mapStateToProps = state => {
  const direction = state.markTable.sortDirection
  const nextDirection = direction === 'asc'
    ? 'desc'
    : 'asc'

  return {
    direction,
    nextDirection
  }
}

const mapDispatchToProps = dispatch => ({
  onSorterClick: direction => {
    dispatch(studentsSort({direction}))
  }
})

const MarkTableSorter = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableSorter)

export default MarkTableSorter