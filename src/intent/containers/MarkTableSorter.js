import {connect} from 'react-redux'
import TableSorter from '../../view/pages/markTable/TableSorter'
import {sortStudents} from '../actions/groupActions'

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
    dispatch(sortStudents({direction}))
  }
})

const MarkTableSorter = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableSorter)

export default MarkTableSorter