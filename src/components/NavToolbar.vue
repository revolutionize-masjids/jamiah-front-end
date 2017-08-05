<!-- The top navigation toolbar connected to the app harness. Contains essential navigation and action controls. -->

<template>
  <md-toolbar class="md-dense md-primary nav-toolbar">
    <!-- Action buttons -->
    <div class="md-toolbar-container action-buttons">
      <!-- Hamburger menu that opens the navigation drawer -->
      <md-button class="md-icon-button" @click.native="emitOpenNavDrawerEvent()">
        <md-icon>menu</md-icon>
      </md-button>

      <span style="flex: 1;"></span>

      <!-- Button that directs user to the blog page -->
      <md-button>
        <span>Blog</span>
        <md-tooltip>Check out our blog!</md-tooltip>
      </md-button>

      <!-- Donate button that allows user to pay via PayPal or MOHIN (or some other payment tool) -->
      <md-button>
        <span>Donate</span>
        <md-tooltip>Give Sadaqah</md-tooltip>
      </md-button>

      <!-- Login button that opens a modal which you can use to login via social media or custom account -->
      <md-button>
        Login
      </md-button>

      <!-- Signup button that opens a model which you can use to login via social media or custom account -->
      <md-button>
        <router-link to="signup">Sign Up</router-link>
      </md-button>
    </div>

    <!-- Textual information -->
    <div class="md-toolbar-container text-content">
      <!-- Masjid name. Take users back to home page -->
      <router-link to="/" class="md-title">
        East Elmhurst Jam-E Muslim Center
      </router-link>

      <span style="flex: 1"></span>

      <!-- Masjid address -->
      <md-icon>place</md-icon>
      <span>9501 24th Ave, East Elmhurst, NY 11369</span>

      <span style="flex: .25"></span>

      <!-- Masjid phone # -->
      <md-icon>phone</md-icon>
      <span>(718) 779-2771</span>
    </div>
  </md-toolbar>
</template>

<script>
  export default {
    methods: {
      // emit an event that indicates to the parent the user wants to open the nav drawer
      emitOpenNavDrawerEvent () {
        this.$emit('onOpenNavDrawer')
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../styles/variables.sass'

  .nav-toolbar
    .text-content
      // align with action buttons
      padding-right: $bs * 3
</style>
