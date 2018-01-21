import types from '../actions/types'

const initialState = {
  resources: {
    students: [
      {
        id: 1,
        name: 'Bertrand',
        surname: 'Russell'
      },
      {
        id: 2,
        name: 'Alfred North',
        surname: 'Whitehead'
      },
      {
        id: 3,
        name: 'Kurt',
        surname: 'Gödel'
      }
    ],

    groups: [
      {
        id: 1,
        name: 'Group 01'
      },
      {
        id: 2,
        name: 'Group 02'
      }
    ],

    enrolments: [
      {
        id: 1,
        student_id: 1,
        group_id: 1,
      },
      {
        id: 2,
        student_id: 2,
        group_id: 1,
      },
      {
        id: 3,
        student_id: 2,
        group_id: 2,
      },
      {
        id: 4,
        student_id: 3,
        group_id: 2,
      }
    ],

    activities: [
      {
        id: 1,
        name: 'Activity 1',
        group_id: 1
      },
      {
        id: 2,
        name: 'Activity 2',
        group_id: 1
      },
      {
        id: 3,
        name: 'Activity 3',
        group_id: 1
      },
      {
        id: 4,
        name: 'Activity 1',
        group_id: 2
      }
    ]
  },
  selectedGroupId: 1
}

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