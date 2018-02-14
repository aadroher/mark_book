import {connect} from 'react-redux'
import ButtonSelector from '../../view/pages/markTable/ButtonSelector'

const getPath = group =>
  `/groups/${group.id}`

const mapStateToProps = state => ({
    options: state.resources.groups.map(group => ({
      id: group.id,
      label: group.name,
      path: getPath(group),
      disabled: group.id === state.selectedGroupId
    }))
})

const mapDispatchToProps = dispatch => ({})

const GroupSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonSelector)

export default GroupSelector