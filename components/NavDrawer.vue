<!-- The navigation drawer of the application. Displays both on small and large screen devices. Except on desktop, it's permanent and on mobile its temporary.
Contains important info and actions for the user. -->

<template>
  <v-navigation-drawer v-model="isNavDrawerOpen" persistent>
    <v-toolbar class="primary" flat dark>
      <v-toolbar-title>Navigation Drawer</v-toolbar-title>
    </v-toolbar>
  </v-navigation-drawer>
</template>

<script>
  export default {
    computed: {
      /**
       * Gets state representing whether nav drawer is open. Also updates the
       * state by commiting a mutation based on whether the user wants to
       * open or close the drawer. Is the `v-model` for the nav drawer.
       * @type {Object}
       */
      isNavDrawerOpen: {
        /**
         * Gets state representing whether nav drawer is open.
         * @method get
         * @return {Boolean} - Whether the nav drawer is open.
         */
        get () {
          return this.$store.state.isNavDrawerOpen
        },
        /**
         * Updates the state by commiting a mutation based on whether the user
         * wants to open or close the nav drawer.
         * @method set
         * @param  {Boolean} value - Whether the user wants to open the drawer.
         */
        set (value) {
          this.$store.commit('setIsNavDrawerOpen', value)
        }
      }
    }
  }
</script>
