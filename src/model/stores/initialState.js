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
        studentId: 1,
        groupId: 1,
      },
      {
        id: 2,
        studentId: 2,
        groupId: 1,
      },
      {
        id: 3,
        studentId: 2,
        groupId: 2,
      },
      {
        id: 4,
        studentId: 3,
        groupId: 2,
      },
      {
        id: 5,
        studentId: 3,
        groupId: 1,
      }
    ],

    activities: [
      {
        id: 1,
        name: 'Level assessment test',
        groupId: 1
      },
      {
        id: 2,
        name: 'Mid term exam',
        groupId: 1
      },
      {
        id: 3,
        name: 'Dissertation',
        groupId: 1
      },
      {
        id: 4,
        name: 'Final Exam',
        groupId: 1
      },
      {
        id: 4,
        name: 'Activity 1',
        groupId: 2
      }
    ]

  },
  markTable: {
    sortDirection: 'asc',
    header: [
      {
        value: 'Student'
      }
    ],
    rows: []
  },
  selectedGroupId: 1,
}

export default initialState