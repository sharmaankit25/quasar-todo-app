<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
        <q-input
          outlined
          v-model="taskToSubmit.name"
          class="col"
          label="Task Name"
          :rules="[val => !!val || 'Field is required']"
          autofocus
          ref="name">
          <template v-slot:append>
            <q-icon v-if="taskToSubmit.name" name="close" @click="taskToSubmit.name = ''" class="cursor-pointer" />
          </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">
        <q-input
          outlined
          label="Due Date"
          v-model="taskToSubmit.dueDate"
          >
            <template v-slot:append>
              <q-icon v-if="!taskToSubmit.dueDate" name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate" />
                </q-popup-proxy>
              </q-icon>
              <q-icon v-if="taskToSubmit.dueDate" name="close" @click="clearDueDate" class="cursor-pointer" />
            </template>
          </q-input>
        </div>
        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            outlined
            label="Due Time"
            v-model="taskToSubmit.dueTime"
          >
          <template v-slot:append>
            <q-icon v-if="!taskToSubmit.dueTime" name="access_time" class="cursor-pointer">
              <q-popup-proxy>
                <q-time v-model="taskToSubmit.dueTime" />
              </q-popup-proxy>
            </q-icon>
            <q-icon v-if="taskToSubmit.dueTime" name="close" @click="taskToSubmit.dueTime = ''" class="cursor-pointer" />
          </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn type="submit" label="Save" color="primary" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  props: ['close'],
  methods: {
    submitForm () {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    ...mapActions('tasks', ['addTask']),
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  }
}
</script>
