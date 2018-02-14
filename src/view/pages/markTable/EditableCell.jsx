import React from 'react'
import styles from './EditableCell.module.css'

class StudentCellInput extends React.Component {
  constructor(props) {
    super(props)

    const {value, studentId} = props
    this.state = {value, studentId}

    const {onStudentCellBlur} = props

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
    console.log({surname, name})
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

const EditableCell = ({cell, onStudentCellClick, onStudentCellBlur}) =>
  <td
    className={styles['student-cell']}
    onClick={e => {
      const {coordinates} = cell
      onStudentCellClick({coordinates})
    }}
  >
    {
      cell.isInEditionMode
        ? (
          <StudentCellInput
            studentId={cell.student.id}
            onStudentCellBlur={onStudentCellBlur}
            value={cell.value}
          />
        )
        : cell.value
    }
  </td>

export default EditableCell
