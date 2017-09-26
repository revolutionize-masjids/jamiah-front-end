<!-- The top navigation toolbar contains essential navigation controls and
action buttons. -->

<template>
  <v-toolbar class="primary" dark dense fixed>
    <!-- Hamburger menu that open the navigation drawer. -->
    <v-toolbar-side-icon @click.native.stop="openNavDrawer" dark />

    <!-- Company logo button that takes user to homepage. -->
    <v-toolbar-title>
      <router-link :to="{ name: 'index' }" tag="span" router-link-inactive>
        Jamiah
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <Login />
  </v-toolbar>
</template>

<script>
  import Login from '@/components/NavToolbar/Login'

  export default {
    components: {
      Login
    },
    methods: {
      openNavDrawer () {
        this.$store.commit('setIsNavDrawerOpen', true)
      }
    }
  }
</script>
