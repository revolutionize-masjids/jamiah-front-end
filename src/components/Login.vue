<!-- Login to the app or direct user to sign up -->

<template>
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
</template>

<script>
  export default {}
</script>

<style lang="sass">
  // use global variables
  @import '../styles/variables.sass'
</style>
