<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="absolute-center">
          Todos App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab v-for="nav in navs" :key="nav.label" :to="nav.to" :icon="nav.icon" :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>

        <q-item clickable :to="nav.to" exact
          v-for="nav in navs"
          :key="nav.label"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
        {
          label: 'About',
          icon: 'people',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer{
      display: none;
    }
  }
</style>
