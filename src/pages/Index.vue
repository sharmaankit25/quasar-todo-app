<template>
  <q-page class="q-pa-md">
    <no-tasks v-if="!Object.keys(tasksTodo).length" />
    <task-todo v-else color="bg-red-4" label="Todo" :tasks="tasksTodo" />
    <task-todo color="bg-green-4" label="Completed" :tasks="tasksCompleted" />
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  mounted () {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    'task-todo': require('components/tasks/TaskTodo.vue').default,
    'add-task': require('components/tasks/modals/addTask.vue').default,
    'no-tasks': require('components/tasks/NoTasks.vue').default
  }
}
</script>

<style lang="scss">
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>
