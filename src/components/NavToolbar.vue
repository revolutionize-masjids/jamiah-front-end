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
      <!-- <router-link to="signup" class="md-button">Login/Signup</router-link> -->
      <md-menu md-size="4" md-direction="bottom-right">
        <md-button md-menu-trigger>
          Login/Signup
        </md-button>

        <md-menu-content class="login-menu">
          <md-layout md-column>
            <md-input-container>
              <label>Email</label>
              <md-input></md-input>
            </md-input-container>
            <md-checkbox>
              Stay signed on
            </md-checkbox>
            <md-input-container>
              <label>Password</label>
              <md-input></md-input>
            </md-input-container>
            <md-button class="md-primary md-raised">
              Log In
            </md-button>

            <md-divider></md-divider>

            <md-button class="md-primary md-raised">
              Login with Facebook
            </md-button>
            <md-button class="md-primary md-raised">
              Log in with Google
            </md-button>
            <p class="md-caption">
              <span>New User?</span>
              <router-link to="signup">Sign up!</router-link>
            </p>
          </md-layout>
        </md-menu-content>
      </md-menu>
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
    height: $nav-toolbar-height

    .text-content
      // align text content with action buttons
      padding-right: $bs * 3

  .login-menu
    padding: $bs
    background-color: white

    .md-button
      width: 100%
      margin-right: 0
      margin-left: 0

    // .md-caption
    //   margin-left: $bs * 3
</style>
