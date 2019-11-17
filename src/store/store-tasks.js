const state = {
  tasks: {
    'ID1': {
      name: 'Task 1',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Task 2',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '16:00'
    },
    'ID3': {
      name: 'Task 3',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '14:00'
    }
  }

}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
