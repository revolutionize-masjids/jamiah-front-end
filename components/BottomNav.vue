<!-- The bottom navigation bar that allows users to switch between important
pages of the app seamlessly. -->

<template>
  <v-bottom-nav :value="true">
    <!-- Nav button that takes user to home page. -->
    <v-btn :to="{ name: 'index' }" flat dark>
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <!-- Nav button that takes user to event page. -->
    <v-btn :to="{ name: 'events' }" flat dark>
      <span>Events</span>
      <v-icon>event</v-icon>
    </v-btn>

    <!-- Nav button that takes user to map page. -->
    <v-btn :to="{ name: 'map' }" flat dark>
      <span>Map</span>
      <v-icon>map</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>
