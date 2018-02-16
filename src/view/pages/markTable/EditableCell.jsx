import React from 'react'
import styles from './EditableCell.module.css'

class StudentCellInput extends React.Component {
  constructor(props) {
    super(props)

    const {value, studentId} = props
    this.state = {value, studentId}

    const {
      onInputUpdate,
      onStudentCellBlur,
    } = props

    this.onInputUpdate = onInputUpdate.bind(this)
    this.onStudentCellBlur = onStudentCellBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  dispatchEdit() {
    const {value} = this.state
    const [surname, name] = value.split(',')
      .map(token =>
        !!token
          ? token.trim()
          : token
      )
    const student = {
      id: this.state.studentId,
      name: name || null,
      surname: surname || null,
    }
    this.onStudentCellBlur({
      value,
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

  return (
    <td
      className={styles['student-cell']}
      onClick={e => {
        onStudentCellClick(cell)
      }}
    >
      {
        cell.isInEditionMode
          ? (
            <StudentCellInput
              studentId={cell.student.id}
              onStudentCellBlur={onStudentCellBlur}
              onInputUpdate={onInputUpdate}
              value={cell.value}
            />
          )
          : cell.value
      }
    </td>
  )
}


export default EditableCell
