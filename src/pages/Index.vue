<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list bordered seperator>
      <task v-for="(task,key) in tasks" :key="key" :task="task" :id="key" ></task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('tasks', ['tasks'])
    // tasks () {
    //   return this.$store.getters['tasks/tasks']
    // }
  },
  components: {
    'task': require('components/tasks/task.vue').default
  }
}
</script>

<style lang="scss">
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>
