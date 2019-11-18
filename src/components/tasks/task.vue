<template>
  <q-item v-ripple
        @click="updateTask({ id: id, updates: {completed:!task.completed} })"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-2'"
        clickable>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed }">{{ task.name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
          <div v-if="task.dueDate" class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs" />
          </div>
          <div class="column">
          <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
          <q-item-label class="row justify-end" caption><small>{{ task.dueTime }}</small></q-item-label>
          </div>
          </div>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <q-btn
              @click.stop="promptToDelete(id)"
              flat
              round
              dense
              color="red"
              icon="delete" />
              <q-btn
              @click.stop="showEditTask = true"
              flat
              round
              dense
              color="primary"
              icon="edit" />
          </div>
        </q-item-section>

      <q-dialog v-model="showEditTask">
        <edit-task :id="id" :task="task" @close="showEditTask = false" />
      </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  data () {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to Delete ?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistant: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    'edit-task': require('components/tasks/modals/editTask.vue').default
  }
}
</script>
