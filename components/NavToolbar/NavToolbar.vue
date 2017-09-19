<!-- The top navigation toolbar contains essential navigation controls and
action buttons. -->

<template>
  <v-toolbar class="primary" dark dense fixed>
    <!-- Hamburger menu that open the navigation drawer. -->
    <v-toolbar-side-icon @click.native="emitOpenNavDrawerEvent()" dark />

    <!-- Company logo button that takes user to homepage. -->
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }" tag="span" router-link-inactive>
        Jamiah
      </router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>
