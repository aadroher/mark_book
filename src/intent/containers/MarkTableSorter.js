import {connect} from 'react-redux'
import TableSorter from '../../view/pages/markTable/TableSorter'
import { sortStudents } from '../actions/groupActions'

const mapStateToProps = state => ({
  direction: state.sortDirection
})

const mapDispatechToProps = dispatch => ({
  onSorterClick: direction => {
    dispatch(sortStudents({ direction }))
  }
})

const MarkTableSorter = connect(
  mapStateToProps,
  mapDispatechToProps
)(TableSorter)

export default MarkTableSorter