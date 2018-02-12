import { groupSelect } from '../../../model/stores/markTable'

describe('Group actions', () => {

  describe('select group', () => {

    it('payload contains the right id value', () => {
      const expectedId = 1984
      const action = groupSelect({id: expectedId})
      expect(action.payload.id).toBe(expectedId)
    })

  })

})