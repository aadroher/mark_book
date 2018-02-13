import {connect} from 'react-redux'
import MarkTable from '../../view/pages/markTable/EditableCell'
import {studentCellEdit} from '../../model/reducers/markTable'

const getIsInEditionMode = ({editionCellCoordinates}, {coordinates}) =>
  editionCellCoordinates.column === coordinates.column
  && editionCellCoordinates.row === coordinates.row

const mapStateToProps = ({markTable}, {cell}) => {
  const isInEditionMode = getIsInEditionMode(markTable, cell)
  return Object.assign(cell, { isInEditionMode })
}


const mapDispatchToProps = dispatch => ({
  onStudentCellClick: coordinates => {
    dispatch(studentCellEdit(coordinates))
  }
})

const StudentCell = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkTable)

export default StudentCell