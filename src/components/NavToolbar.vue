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

      <!-- List of services -->
      <!-- <md-menu md-size="4">
        <md-button md-menu-trigger>Services</md-button>

        <md-menu-content>
          <md-subheader>'Ibadah</md-subheader>
          <md-menu-item>'Eid Prayer</md-menu-item>
          <md-menu-item>Jummu'ah</md-menu-item>
          <md-menu-item>Five Daily Prayers</md-menu-item>
          <md-menu-item>Lectures & Seminars</md-menu-item>
          <md-divider></md-divider>
          <md-subheader>Education</md-subheader>
          <md-menu-item>Saturday School</md-menu-item>
          <md-menu-item>Sunday School</md-menu-item>
          <md-menu-item>Youth Activities</md-menu-item>
          <md-menu-item>Sister's Programs</md-menu-item>
          <md-menu-item>Adult Islamic Education</md-menu-item>
          <md-divider></md-divider>
          <md-menu-item>
            <div class="md-list-text-container">
              <span>Marriage Ceremony</span>
              <span>Nikkah</span>
            </div>
          </md-menu-item>
          <md-menu-item>
            <div class="md-list-text-container">
              <span>Funerals</span>
              <span>Janazah</span>
            </div>
          </md-menu-item>
          <md-divider></md-divider>
          <md-menu-item>Volunteering</md-menu-item>
        </md-menu-content>

        <md-tooltip>We have many programs & services!</md-tooltip>
      </md-menu> -->

      <!-- Button that directs user to the forums -->
      <md-button>
        <span>NEWS & EVENTS</span>
        <md-tooltip>Learn about the latest news and events</md-tooltip>
      </md-button>

      <!-- Button that directs user to the forums -->
      <md-button>
        <span>Forums</span>
        <md-tooltip>Discuss with the community</md-tooltip>
      </md-button>

      <!-- Button that directs user to the "Learn about Islam" page -->
      <md-button>
        <span>Learn Islam</span>
        <md-tooltip>Learn about Islam!</md-tooltip>
      </md-button>

      <!-- Donate via PayPal or MOHIN (or some other payment tool) -->
      <md-button>
        <span>Donate</span>
        <md-tooltip>Give Sadaqah</md-tooltip>
      </md-button>

      <!-- Get contact information -->
      <md-menu md-size="6">
        <md-button md-menu-trigger>Contact</md-button>

        <md-menu-content>
          <md-menu-item>
            <div class="md-list-text-container">
              <span>9501 24th Ave, East Elmhurst, NY 11369</span>
              <span>Masjid Address</span>
            </div>
          </md-menu-item>
          <md-menu-item>
            <div class="md-list-text-container">
              <span>(718) 779-2771</span>
              <span>Masjid Phone Number</span>
            </div>
          </md-menu-item>
          <md-menu-item>
            <div class="md-list-text-container">
              <span>contact@eejmc.org</span>
              <span>Masjid Email</span>
            </div>
          </md-menu-item>
          <md-divider></md-divider>
          <md-menu-item>
            <div class="md-list-text-container">
              <span>syednashikaman@gmail.com</span>
              <span>Technical Support</span>
            </div>
          </md-menu-item>
        </md-menu-content>

        <md-tooltip>Reach out to us!</md-tooltip>
      </md-menu>

      <!-- Signup button that opens a model which you can use to login via social media or custom account -->
      <router-link to="signup" class="md-button">Login/Signup</router-link>
    </div>

    <!-- Textual information -->
    <div class="md-toolbar-container text-content">
      <!-- Masjid name. Take users back to home page -->
      <router-link to="/" class="md-title md-button">
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
      // align text content with action buttons
      padding-right: $bs * 3

    .md-menu
      .md-menu-content
        .md-menu-item
          span
            color: red !important
</style>
