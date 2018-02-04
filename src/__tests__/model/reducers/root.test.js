import types from '../../../intent/actions/types'
import rootReducer from '../../../model/reducers/root'

describe('Root reducer', () => {

  describe('behaviour of SELECT_GROUP', () => {

    it('does not alter the value when a different action is passed', () => {
      const oldState = {
        selectedGroupId: 1984
      }
      const differentAction = {
        type: Symbol('SOMETHING_ELSE'),
        payload: {
          id: 2001
        }
      }
      const newState = rootReducer(oldState, differentAction)

      expect(newState.selectedGroupId).toBe(oldState.selectedGroupId)
    })

    it('does not alter the value when the currently selected value is passed', () => {
      const groupId = 1984
      const oldState = {
        selectedGroupId: groupId
      }
      const action = {
        type: types.SELECT_GROUP,
        payload: {
          id: groupId
        }
      }
      const newState = rootReducer(oldState, action)

      expect(newState.selectedGroupId).toBe(oldState.selectedGroupId)
    })

    it('properly sets the new value', () => {
      const oldState = {
        selectedGroupId: 1984
      }
      const newGroupId = 2001
      const action = {
        type: types.SELECT_GROUP,
        payload: {
          id: newGroupId
        }
      }
      const newState = rootReducer(oldState, action)

      expect(newState.selectedGroupId).toBe(newGroupId)
    })

  })

})