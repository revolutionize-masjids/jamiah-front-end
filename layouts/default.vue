<template>
  <v-app light>
    <NavToolbar></NavToolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import NavToolbar from '../components/NavToolbar/NavToolbar.vue'

  export default {
    components: {
      NavToolbar
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
