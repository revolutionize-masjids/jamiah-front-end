<!-- A button that opens a menu which allows the user to login or sign up -->

<template>
  <v-dialog v-model="isLoginDialogOpen" transition="dialog-bottom-transition" ref="login-menu" fullscreen>
    <!-- Button that opens the dialog -->
    <v-btn class="white--text" slot="activator" flat>Login / Signup</v-btn>

    <!-- Dialog content -->
    <v-card class="login-menu">
      <v-toolbar class="teal">
        <!-- X button that closes the dialog -->
        <v-btn @click.native="closeDialog" icon>
          <v-icon class="white--text">close</v-icon>
        </v-btn>

        <v-toolbar-title class="white--text">Login or Signup</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <!-- Login form that validates credentials -->
        <form @submit.prevent="login()">
          <!-- Email -->
          <v-text-field v-model="emailInput" v-validate="'required|email'" label="Email" :error-messages="errors.first('email')" type="email" name="email" prepend-icon="mail" required></v-text-field>

          <!-- Save session to local storage -->
          <v-checkbox v-model="shouldRemainSignedIn" v-bind:label="`Stay signed on`"></v-checkbox>

          <!-- Password -->
          <v-text-field v-model="passwordInput" v-validate="'required|alpha_dash|min:6'" :error-messages="errors.first('password')" label="Password" type="password" name="password" prepend-icon="lock" required></v-text-field>

          <!-- Form submit button that prompts API to authenticate -->
          <v-btn class="teal white--text" type="submit" raised>Login</v-btn>

          <!-- Beginning of social media logins -->
          <v-divider></v-divider>

          <!-- Facebook login -->
          <v-btn class="blue darken-3 white--text" raised>
            Login with Facebook
          </v-btn>

          <!-- Google+ Login -->
          <v-btn class="red lighten-2 white--text" raised>
            Login with Google+
          </v-btn>

          <!-- Redirect user to signup page -->
          <p class="md-caption">
            <span>New User?</span>
            <router-link to="signup" @click.native="closeDialog()">
              Sign up!
            </router-link>
          </p>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: function () {
      return ({
        /** the value for the email input in the login form */
        emailInput: null,
        /** the value for the password input in the login form */
        passwordInput: null,
        /** whether the user wants to remain signed in */
        shouldRemainSignedIn: false
      })
    },
    computed: {
      /** whether the dialog is be open or closed */
      isLoginDialogOpen: {
        get () {
          return this.$store.state.isLoginDialogOpen
        },
        set (value) {
          this.$store.commit('setIsLoginDialogOpen', value)
        }
      }
    },
    methods: {
      /** close the login dialog for whatever reason */
      closeDialog () {
        this.$store.commit('setIsLoginDialogOpen', false)
      },
      /** authenticate user and login */
      async login () {
        try {
          // see if form inputs are valid
          await this.$validator.validateAll()

          // try authenticating

          // handle success
          // let app know that user logged in and store user cache
          this.$store.commit('login', {
            userId: null,
            firstName: null,
            lastName: null,
            email: this.emailInput,
            /** profile picture */
            avatar: null
          })
        } catch (error) {
          // handle errors
          console.log(`failed to authenticate & login: ${error}`)
        }
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  .login-menu
    padding: $bs
    background-color: white

    ul
      padding: 0

    .md-input-container
      margin: 0

    .md-checkbox
      margin: $bs 0 0 $bs * 2

    .v-btn
      width: 100%
      margin-right: 0
      margin-left: 0

    .md-caption
      margin-left: $bs * 2
</style>
