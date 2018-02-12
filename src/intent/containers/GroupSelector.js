import {connect} from 'react-redux'
import ButtonSelector from '../../view/pages/markTable/ButtonSelector'

import {studentsSort} from '../../model/stores/markTable'
import {groupSelect} from "../../model/stores/markTable"

const getPath = group =>
  `/groups/${group.id}`

const mapStateToProps = state => ({
  options: state.resources.groups.map(group => ({
    id: group.id,
    label: group.name,
    path: getPath(group),
    disabled: group.id === state.selectedGroupId
  })),
})

const mapDispatechToProps = dispatch => ({
  onGroupNameClick: id => {
    dispatch(groupSelect({ id }))
    dispatch(studentsSort( { direction: 'asc' } ))
  }
})

const GroupSelector = connect(
  mapStateToProps,
  mapDispatechToProps
)(ButtonSelector)

export default GroupSelector