<!-- The top navigation toolbar connected to the app harness. Contains essential navigation and action controls -->

<template>
  <v-toolbar class="teal" dense>
    <!-- Hamburger menu that open the navigation drawer -->
    <v-toolbar-side-icon class="white--text" @click.native="emitOpenNavDrawerEvent()"></v-toolbar-side-icon>

    <!-- The name of the application. Click to go to homepage -->
    <router-link :to="{ name: 'Home' }">
      <v-toolbar-title class="white--text">APP NAME</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <!-- Desktop action buttons -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="white--text" :to="{ name: 'Events' }" v-tooltip:bottom="{ html: 'Learn about the latest news and events' }" flat>
        News & Events
      </v-btn>

      <!-- Button that takes user to forums -->
      <v-btn class="white--text" v-tooltip:bottom="{ html: 'Discuss with the community' }" flat>
        Forums
      </v-btn>

      <!-- Button that directs user to learn more about Islam -->
      <v-btn class="white--text" v-tooltip:bottom="{ html: 'Learn about Islam' }" flat>
        Learn Islam
      </v-btn>

      <!-- Donate via PayPal, MOHIN, or some other payment service -->
      <v-btn class="white--text" v-tooltip:bottom="{ html: 'Give Sadaqah' }" flat>
        Donate
      </v-btn>

      <!-- Get contact info, send support requests, etc. -->
      <v-menu transition="slide-y-transition" offset-y offset-x bottom>
        <v-btn class="white--text" slot="activator" v-tooltip:bottom="{ html: 'Reach out to us' }" flat>
          Contact
        </v-btn>
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(718) 779-2771</v-list-tile-title>
              <v-list-tile-sub-title>Masjid Phone</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon dark>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>contact@eejmc.org</v-list-tile-title>
              <v-list-tile-sub-title>Masjid Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>support@eejmc.org</v-list-tile-title>
              <v-list-tile-sub-title>Technical Support</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>9501 24th Ave</v-list-tile-title>
              <v-list-tile-sub-title>
                East Elmhurst, NY 11369
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>

    <!-- Mobile action buttons -->
    <v-toolbar-items>
      <!-- Login to the app or direct user to sign up -->
      <v-btn class="white--text" v-if="!isLoggedIn" slot="activator" v-tooltip:bottom="{ html: 'Log in to the app' }" flat>
        Login / Signup
      </v-btn>
      <!-- Logout of the app and redirect to homepage -->
      <v-btn v-else @click.native="logout()" class="white--text" v-tooltip:bottom="{ html: 'Log out of the app' }" flat>
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
        this.$store.commit('logout')
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  // TODO: get the nav-toolbars actual height somehow dynamically
  .nav-toolbar
    height: $nav-toolbar-height

</style>
