import React from 'react'
import styles from './EditableCell.module.css'

class StudentCellInput extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)

    const {value} = props
    this.state = {value}

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    const {value} = event.target
    this.setState({value})
  }

  handleBlur(event) {
    console.log('lost focus')
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

const EditableCell = ({cell, onStudentCellClick}) =>
  <td
    className={styles['student-cell']}
    onClick={e => {
      const {coordinates} = cell
      onStudentCellClick({coordinates})
    }}
  >
    {
      cell.isInEditionMode
        ? <StudentCellInput value={cell.value}/>
        : cell.value
    }
  </td>

export default EditableCell
