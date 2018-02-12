import React from 'react'
import shallowWithStore from '../../../lib/tests/shallowWithStore'
import { createMockStore } from 'redux-test-utils'
import GroupMarkTable from '../GroupMarkTable'

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
  markTable: {
    header: [],
    rows: []
  },
  selectedGroupId
})

describe('GroupMarkTable', () => {

  it('should render successfully', () => {
    const mockState = getMockedState(1)
    const store = createMockStore(mockState)

    const component = shallowWithStore(
      React.createElement(GroupMarkTable),
      store
    )
    expect(component).toBeInstanceOf(Object)

  })
})