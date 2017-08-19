<!-- "Outer shell" of the app that contains toolbar and bottom bar etc. -->
<!-- Contains anything that should be displayed in EVERY page -->

<template>
  <div>
    <!-- Top navigation bar that contains title and essential buttons and info. Logging in, signing up, account info, open drawer button, etc. -->
    <!-- Listen for the open nav drawer event -->
    <NavToolbar @onOpenNavDrawer="openNavDrawer()" />

    <!-- App-wide navigation drawer (sidebar) that slides from the left of the screen -->
    <NavDrawer ref="navDrawer" />

    <!-- All content components will be rendered here (such as home) -->
    <router-view></router-view>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  import NavDrawer from '@/components/NavDrawer'
  import NavToolbar from '@/components/NavToolbar'

  export default {
    components: {
      NavDrawer,
      NavToolbar
    },
    // GraphQL requests
    apollo: {
      // make query to GraphQL API to fetch the first name of all created users
      allUsers: {
        query: gql`
          query {
            allUsers {
              firstName
            }
          }
        `
      }
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
