<template>
<div class="q-mt-lg"  v-if="Object.keys(tasks).length">
<list-header :bgColor="color">{{ label }}</list-header>
<q-list bordered seperator>
      <task v-for="(task,key) in tasks" :key="key" :task="task" :id="key" ></task>
</q-list>
</div>
</template>

<script>
export default {
  props: ['tasks', 'label', 'color'],
  components: {
    'task': require('components/tasks/task.vue').default,
    'list-header': require('components/shared/ListHeader.vue').default
  }
}
</script>
