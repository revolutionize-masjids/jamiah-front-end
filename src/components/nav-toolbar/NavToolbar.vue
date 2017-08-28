<!-- The top navigation toolbar connected to the app harness. Contains essential navigation and action controls. -->

<template>
  <md-toolbar class="md-dense md-primary nav-toolbar">
    <!-- Action buttons -->
    <div class="md-toolbar-container action-buttons">
      <!-- Hamburger menu that opens the navigation drawer -->
      <md-button class="md-icon-button" @click.native="emitOpenNavDrawerEvent()">
        <md-icon>menu</md-icon>
      </md-button>

      <!-- Masjid name. Take users back to home page -->
      <router-link to="/" class="md-title md-button">
        APP NAME
      </router-link>

      <span style="flex: 1;"></span>

      <!-- Button that directs user to the forums -->
      <router-link to="events" class="md-button">
        <span>NEWS & EVENTS</span>
        <md-tooltip>Learn about the latest news and events</md-tooltip>
      </router-link>

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

      <!-- Login to the app or direct user to sign up -->
      <Login v-if="!isLoggedIn"/>
      <!-- Button that directs user to the forums -->
      <md-button @click.native="logout()" v-else>
        Logout
      </md-button>
    </div>
  </md-toolbar>
</template>

<script>
  import Login from '@/components/Login'

  export default {
    components: {
      Login
    },
    computed: {
      /** whether the user is logged in */
      isLoggedIn () {
        return this.$store.state.isLoggedIn
      }
    },
    methods: {
      // emit an event that indicates to the parent the user wants to open the
      // nav drawer
      emitOpenNavDrawerEvent () {
        this.$emit('onOpenNavDrawer')
      },
      /** log out the user */
      logout () {
        // ask the user if he's sure he wants to logout
        this.$refs['logout-confirmation-prompt'].open()
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  .nav-toolbar
    height: $nav-toolbar-height

    .text-content
      padding-right: $bs * 3
</style>
