import Vue from 'vue'
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
  updateTask: (state, payload) => {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask: (state, id) => {
    Vue.delete(state.tasks, id)
  }

}

const actions = {
  updateTask: ({ commit }, payload) => {
    commit('updateTask', payload)
  },
  deleteTask: ({ commit }, id) => {
    commit('deleteTask', id)
  }
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
