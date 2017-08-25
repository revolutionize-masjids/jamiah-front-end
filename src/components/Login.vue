<!-- A button that opens a menu which allows the user to login or sign up -->

<template>
  <md-menu md-size="6" md-direction="bottom-right" ref="login-menu">
    <md-button md-menu-trigger>
      Login/Signup
    </md-button>

    <md-menu-content class="login-menu">
      <md-layout md-column>
        <md-input-container>
          <label>Email</label>
          <md-input></md-input>
        </md-input-container>

        <!-- Save session to local storage -->
        <md-checkbox>Stay signed on</md-checkbox>

        <md-input-container>
          <label>Password</label>
          <md-input></md-input>
        </md-input-container>

        <md-button class="md-primary md-raised">
          Log In
        </md-button>

        <md-divider></md-divider>

        <!-- Social media login -->
        <md-button class="md-primary md-raised">
          Login with Facebook
        </md-button>
        <md-button class="md-primary md-raised">
          Log in with Google
        </md-button>

        <!-- Redirect user to signup page -->
        <p class="md-caption">
          <span>New User?</span>
          <router-link to="signup" @click.native="closeMenu()">
            Sign up!
          </router-link>
        </p>
      </md-layout>
    </md-menu-content>
  </md-menu>
</template>

<script>
  export default {
    methods: {
      closeMenu () {
        this.$refs['login-menu'].close()
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../styles/variables.sass'

  .login-menu
    padding: $bs
    background-color: white

    ul
      padding: 0

    .md-input-container
      margin: 0

    .md-checkbox
      margin: $bs 0 0 $bs * 2

    .md-button
      width: 100%
      margin-right: 0
      margin-left: 0

    .md-caption
      margin-left: $bs * 2
</style>
