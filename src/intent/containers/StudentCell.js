import {connect} from 'react-redux'
import EditableCell from '../../view/pages/markTable/EditableCell'
import {studentCellEdit} from '../../model/reducers/markTable'
import {studentUpdate} from '../../model/reducers/resources'

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
  },
  onStudentCellBlur: student => {
    dispatch(studentUpdate(student))
  }
})

const StudentCell = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableCell)

export default StudentCell