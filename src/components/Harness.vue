<!-- "Outer shell" of the app that contains toolbar and bottom bar etc. -->
<!-- Anything that should be displayed on EVERY page -->

<template>
  <div>
    <!-- Top navigation bar that contains title and essential buttons and info. Logging in, signing up, account info, open drawer button, etc. -->
    <md-toolbar class="md-medium md-primary">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click.native="openNavDrawer()">
          <md-icon>menu</md-icon>
        </md-button>

        <span style="flex: 1;"></span>

        <md-button>
          Login
        </md-button>

        <md-button>
          <router-link to="signup">Sign Up</router-link>
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <!-- Take users back to home page -->
        <router-link to="/" class="md-title">
          East Elmhurst Jam-E Muslim Center
        </router-link>
      </div>
    </md-toolbar>

    <NavDrawer ref="navDrawer" />

    <!-- All components will be rendered here (such as home) -->
    <router-view></router-view>
  </div>
</template>

<script>
  import NavDrawer from '@/components/NavDrawer'

  export default {
    components: {
      NavDrawer
    },
    methods: {
      // handle opening the navigation drawer on the left
      openNavDrawer () {
        this.$refs.navDrawer.open()
      }
    }
  }
</script>

<style lang="sass"></style>
