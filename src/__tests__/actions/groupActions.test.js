import types from '../../actions/types'
import { selectGroup } from '../../actions/groupActions'

describe('Group actions', () => {

  describe('select group', () => {

    it('has the right type' , () => {
      const action = selectGroup()
      expect(action.type).toBe(types.SELECT_GROUP)
    })

    it('payload contains the right id value', () => {
      const expectedId = 1984
      const action = selectGroup({id: expectedId})
      expect(action.payload.id).toBe(expectedId)
    })

  })

})