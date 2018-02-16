import deepEqual from 'deep-equal'
import {connect} from 'react-redux'
import EditableCell from '../../view/pages/markTable/EditableCell'
import {
  studentCellStartEdit,
  studentCellUpdate,
  studentCellEndEdit
} from '../../model/reducers/markTable'
import {studentUpdate} from '../../model/reducers/resources'

const getIsInEditionMode = ({editionCell}, cell) =>
  editionCell.student.id
    ? editionCell.student.id === cell.student.id
    : deepEqual(editionCell.coordinates, cell.coordinates)

const mapStateToProps = ({markTable}, {cell}) => {
  const isInEditionMode = getIsInEditionMode(markTable, cell)
  return Object.assign(cell, {isInEditionMode})
}

const mapDispatchToProps = dispatch => ({
  onStudentCellClick: cell => {
    dispatch(studentCellStartEdit({cell}))
  },
  onInputUpdate: value => {
    dispatch(studentCellUpdate({value}))
  },
  onStudentCellBlur: student => {
    dispatch(studentUpdate(student))
    dispatch(studentCellEndEdit())
  },
})

const StudentCell = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableCell)

export default StudentCell