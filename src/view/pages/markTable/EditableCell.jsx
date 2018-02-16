import React from 'react'
import styles from './EditableCell.module.css'

class StudentCellInput extends React.Component {
  constructor(props) {
    super(props)

    const {
      value,
      studentId,
      student,
    } = props

    this.state = {
      value,
      student
    }

    const {
      onInputUpdate,
      onStudentCellBlur,
    } = props

    this.onInputUpdate = onInputUpdate.bind(this)
    this.onStudentCellBlur = onStudentCellBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  dispatchEdit() {
    const {
      student
    } = this.state
    console.log(student)
    this.onStudentCellBlur({
      student
    })
  }

  handleChange(event) {
    const {value} = event.target
    this.setState({value})
    this.onInputUpdate({value})
  }

  componentWillUnmount() {
    this.dispatchEdit()
  }

  render() {
    const {value} = this.state
    return (
      <input
        type='text'
        value={value}
        onChange={this.handleChange}
      />
    )
  }

}

const EditableCell = props => {

  const {cell} = props
  const {
    onStudentCellClick,
    onInputUpdate,
    onStudentCellBlur
  } = props

  const className = cell.isInEditionMode
    ? styles['in-edition']
    : styles['student-cell']
  return (
    <td
      className={className}
      onClick={e => {
        onStudentCellClick(cell)
      }}
    >
      {
        cell.isInEditionMode
          ? (
            <span>
              <StudentCellInput
                key={0}
                studentId={cell.student.id}
                onStudentCellBlur={onStudentCellBlur}
                onInputUpdate={onInputUpdate}
                value={cell.student.surname}
              />
              ,
              <StudentCellInput
                key={1}
                studentId={cell.student.id}
                onStudentCellBlur={onStudentCellBlur}
                onInputUpdate={onInputUpdate}
                value={cell.student.name}
              />
            </span>

          )
          : cell.value
      }
    </td>
  )
}


export default EditableCell
