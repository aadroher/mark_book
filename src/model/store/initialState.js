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
      },
      {
        id: 5,
        student_id: 3,
        group_id: 1,
      }
    ],

    activities: [
      {
        id: 1,
        name: 'Level assessment test',
        group_id: 1
      },
      {
        id: 2,
        name: 'Mid term exam',
        group_id: 1
      },
      {
        id: 3,
        name: 'Dissertation',
        group_id: 1
      },
      {
        id: 4,
        name: 'Final Exam',
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

export default initialState