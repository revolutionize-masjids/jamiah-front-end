<!-- The top navigation toolbar connected to the app harness. Contains essential navigation and action controls. -->

<template>
  <md-toolbar class="md-medium md-primary">
    <div class="md-toolbar-container">
      <md-button class="md-icon-button" @click.native="emitOpenNavDrawerEvent()">
        <md-icon>menu</md-icon>
      </md-button>

      <span style="flex: 1;"></span>

      <md-button>
        Blog
      </md-button>

      <md-button>
        <md-icon>favorite</md-icon>
        <span>Donate</span>
        <md-tooltip>Give Sadaqah</md-tooltip>
      </md-button>

      <md-button>
        <md-icon>place</md-icon>
        <span>Address</span>
        <md-tooltip>Masjid Location</md-tooltip>
      </md-button>

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

<style></style>
