import types from '../../intent/actions/types'
import initialState from '../store/initialState'

const selectGroup = (state, groupId) =>
  Object.assign({}, state, {
    selectedGroupId: groupId
  })

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SELECT_GROUP:
    return selectGroup(state, action.payload.id)
  default:
    return Object.assign({}, state)
  }
}

export default rootReducer