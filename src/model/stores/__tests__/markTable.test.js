import markTable from '../markTable'
import {
  groupSelect,
  studentsSort
} from "../markTable"

const getMockedState = selectedGroupId => ({
  resources: {
    students: [
      {
        id: 1,
        name: 'Guybrush',
        surname: 'Threepwood'
      },
      {
        is: 2,
        name: 'Wally B.',
        surname: 'Feed'
      }
    ],
    groups: [
      {
        id: 1,
      },
      {
        id: 2
      }
    ],
    enrolments:[
      {
        id: 1,
        studentId: 1,
        groupId: 1,
      },
      {
        id: 2,
        studentId: 2,
        groupId: 2,
      }
    ],
    activities: [
      {
        id: 1,
        groupId: 1,
        name: 'Activity 1-1'
      },
      {
        id: 2,
        groupId: 2,
        name: 'Activity 2-1'
      }
    ],
  },
  selectedGroupId
})

describe('Root reducer', () => {

  describe('behaviour for GROUP_SELECT', () => {

    it('does not alter the value when a different action is passed', () => {
      const oldState = getMockedState(1984)
      const differentAction = {
        type: 'SOMETHING_ELSE',
        payload: {
          id: 2001
        }
      }
      const newState = markTable(oldState, differentAction)

      expect(newState.selectedGroupId).toEqual(oldState.selectedGroupId)
    })

    it('does not alter the value when the currently selected value is passed', () => {
      const groupId = 1984
      const oldState = getMockedState(groupId)
      const action = groupSelect({id: groupId})
      const newState = markTable(oldState, action)

      expect(newState.selectedGroupId).toEqual(oldState.selectedGroupId)
    })

    it('properly sets the new value', () => {
      const oldState = getMockedState(1984)
      const newGroupId = 2001
      const action = groupSelect({id: newGroupId})
      const newState = markTable(oldState, action)

      expect(newState.selectedGroupId).toEqual(newGroupId)
    })

    it('loads the right activities into the table', () => {
      const groupId = 1
      const oldState = getMockedState(groupId)
      const expectedActivities = oldState.resources.activities.filter(activity =>
        activity.groupId === groupId
      )

      const action = groupSelect({id: groupId})
      const newState = markTable(oldState, action)

      const activities = newState.markTable.header
      expect(activities).toEqual(expectedActivities)

    })

  })

  // describe('behaviour for STUDENTS_SORT', () => {
  //
  //   it()
  //
  // })

})