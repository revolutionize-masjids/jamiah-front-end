<!-- A button that opens a menu which allows the user to login or sign up -->

<template>
  <md-menu md-size="6" md-direction="bottom-right" ref="login-menu" md-offset-y="50">
    <md-button md-menu-trigger>
      Login/Signup
    </md-button>

    <md-menu-content class="login-menu">
      <form @submit.prevent="login()">
        <md-layout md-column>
          <md-input-container :class="{ 'md-input-container-box': true, 'md-input-invalid': errors.has('email') }">
            <label for="email">Email</label>
            <md-input v-validate="'required|email'" v-model="emailInput" name="email" required></md-input>
            <span class="md-error" v-show="errors.has('email')">
              {{ errors.first('email') }}
            </span>
          </md-input-container>

          <!-- Save session to local storage -->
          <md-checkbox>Stay signed on</md-checkbox>

          <md-input-container class="md-input-container-box">
            <label>Password</label>
            <md-input v-model="passwordInput"></md-input>
          </md-input-container>

          <md-button class="md-primary md-raised" type="submit">
            Log In
          </md-button>

          <md-divider></md-divider>

          <!-- Social media login -->
          <md-button class="md-primary md-raised" type="submit">
            Login with Facebook
          </md-button>
          <md-button class="md-primary md-raised" type="submit">
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
      </form>
    </md-menu-content>
  </md-menu>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    data: function () {
      return ({
        /** the value for the email input in the login form */
        emailInput: null,
        /** the value for the password input in the login form */
        passwordInput: null
      })
    },
    methods: {
      closeMenu () {
        this.$refs['login-menu'].close()
      },
      /** authenticate user and login */
      async login () {
        try {
          // try authenticating

          // handle success
          // let app know that user logged in
          this.$store.commit('login')
        } catch (error) {
          // handle errors
          console.log(`failed to authenticate & login: ${error}`)
        }
      }
    },
    apollo: {
      /** verify login by fetching a user in the database that matches the credentials input by the user */
      user: {
        query: gql`
          query GetUserFromInput($email: String!) {
            # get the user via email and verify via email & password
            user(email: $email) {
              email
              password
            }
          }
        `,
        /** parameters for the query to confirm login credentials match */
        variables () {
          return {
            email: this.emailInput
          }
        }
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
