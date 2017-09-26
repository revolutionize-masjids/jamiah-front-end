<!-- This is the root component; the parent & first component that renders. -->

<template>
  <v-app toolbar light>
    <NavToolbar></NavToolbar>
    <NavDrawer></NavDrawer>
    <main>
      <v-slide-y-transition mode="out-in">
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-slide-y-transition>
    </main>
  </v-app>
</template>

<script>
  import NavToolbar from '@/components/NavToolbar/NavToolbar.vue'
  import NavDrawer from '@/components/NavDrawer.vue'

  export default {
    components: {
      NavToolbar,
      NavDrawer
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { to: '/', title: 'Welcome', icon: 'apps' },
          { to: '/inspire', title: 'Inspire', icon: 'bubble_chart' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
