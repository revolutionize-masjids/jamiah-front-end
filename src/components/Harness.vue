<!-- "Outer shell" of the app that contains toolbar and bottom bar etc. -->
<!-- Contains anything that should be displayed in EVERY page -->

<template>
  <v-app light>
    <!-- Top navigation bar that contains title and essential buttons and info. Logging in, signing up, account info, open drawer button, etc. -->
    <!-- Listen for the open nav drawer event -->
    <NavToolbar @onOpenNavDrawer="openNavDrawer()" />

    <!-- App-wide navigation drawer (sidebar) that slides from the left of the screen -->
    <NavDrawer ref="navDrawer" />

    <main>
      <v-container fluid>
        <!-- All content components will be rendered here (such as home) -->
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import NavDrawer from '@/components/NavDrawer'
  import NavToolbar from '@/components/nav-toolbar/NavToolbar'

  export default {
    components: {
      NavDrawer,
      NavToolbar
    },
    // component methods
    methods: {
      // handle opening the navigation drawer on the left
      openNavDrawer () {
        this.$refs.navDrawer.open()
      }
    }
  }
</script>

<style lang="sass"></style>
