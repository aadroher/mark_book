import {connect} from 'react-redux'
import ButtonSelector from '../components/ButtonSelector'

import { selectGroup } from '../actions/groupActions'

const mapStateToProps = state => ({
  options: state.resources.groups.map(group => ({
    id: group.id,
    label: group.name,
    disabled: group.id === state.selectedGroupId
  }))
})

const mapDispatechToProps = dispatch => ({
  onGroupNameClick: id => {
    dispatch(selectGroup({ id }))
  }
})

const GroupSelector = connect(
  mapStateToProps,
  mapDispatechToProps
)(ButtonSelector)

export default GroupSelector