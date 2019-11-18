<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name ref="modalTaskName" :name.sync="taskToSubmit.name" />
        <modal-task-due-date @clear="clearDueDate" :dueDate.sync="taskToSubmit.dueDate" />
        <modal-task-due-time :dueDate.sync="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime" />
      </q-card-section>
      <modal-buttons />

    </form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      taskToSubmit: {

      }
    }
  },
  props: ['task', 'id', 'close'],
  methods: {
    submitForm () {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.updateTask({ id: this.id, updates: this.taskToSubmit })
      this.$emit('close')
    },
    ...mapActions('tasks', ['updateTask']),
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  },
  components: {
    'modal-header': require('components/tasks/modals/shared/modalHeader.vue').default,
    'modal-task-name': require('components/tasks/modals/shared/modalTaskName.vue').default,
    'modal-task-due-date': require('components/tasks/modals/shared/modalTaskDueDate.vue').default,
    'modal-task-due-time': require('components/tasks/modals/shared/modalTaskDueTime.vue').default,
    'modal-buttons': require('components/tasks/modals/shared/modalButtons.vue').default
  },
  mounted () {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>
