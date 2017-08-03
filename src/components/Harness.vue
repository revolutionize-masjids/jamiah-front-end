<!-- define the "outer shell" of the app -->

<template>
  <div>
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <span style="flex: 1;"></span>

        <md-button>
          Login
        </md-button>

        <md-button>
          Sign Up
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <router-link to="home" class="md-title">
          East Elmhurst Jam-E Muslim Center
        </router-link>
      </div>
    </md-toolbar>
    <router-view></router-view>
  </div>

</template>

<script></script>

<style></style>
