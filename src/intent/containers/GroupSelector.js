import {connect} from 'react-redux'
import ButtonSelector from '../../view/pages/markTable/ButtonSelector'

import {selectGroup, sortStudents} from '../actions/groupActions'

const mapStateToProps = state => ({
  options: state.resources.groups.map(group => ({
    id: group.id,
    label: group.name,
    disabled: group.id === state.selectedGroupId
  })),
})

const mapDispatechToProps = dispatch => ({
  onGroupNameClick: id => {
    dispatch(selectGroup({ id }))
    dispatch(sortStudents( { direction: 'asc' } ))
  }
})

const GroupSelector = connect(
  mapStateToProps,
  mapDispatechToProps
)(ButtonSelector)

export default GroupSelector