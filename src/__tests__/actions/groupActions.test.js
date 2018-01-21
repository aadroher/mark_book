import types from '../../actions/types'
import { selectGroup } from '../../actions/groupActions'

describe('Group actions', () => {

  describe('select group', () => {

    it('has the right type' , () => {
      const action = selectGroup()
      expect(action.type).toBe(types.SELECT_GROUP)
    })

    it('passes the right id value', () => {
      const action = selectGroup(1)
      console.log(action)
    })

  })

})