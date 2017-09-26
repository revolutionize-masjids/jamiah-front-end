<!-- The login/signup dialog with social media logins to login to the app. -->

<template>
  <!-- Dialog is fullscreen on mobile and normal on larger screens. -->
  <v-dialog v-model="isLoginDialogOpen" transition="dialog-bottom-transition" ref="login-menu" fullscreen>
    <!-- Button that opens the dialog. -->
    <v-btn slot="activator" dark flat>Login</v-btn>

    <!-- Dialog content. -->
    <v-card class="login-menu">
      <!-- General info & actions. -->
      <v-toolbar class="primary" dark>
        <!-- X action button that closes the dialog. -->
        <v-btn @click.native="closeDialog" icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Login or Signup</v-toolbar-title>
      </v-toolbar>

      <!-- Main content of dialog. -->
      <v-card-text>
        <!-- Login form that validates credentials. -->
        <form @submit.prevent="login()">
          <v-layout column>
            <!-- Email. -->
            <v-text-field v-model="emailInput" v-validate="'required|email'" label="Email" :error-messages="errors.collect('email')" type="email" name="email" prepend-icon="mail" required></v-text-field>

            <!-- Save session to local storage. -->
            <v-checkbox v-model="shouldRemainSignedIn" :label="`Stay signed on`" class="pt-0"></v-checkbox>

            <!-- Password. -->
            <v-text-field v-model="passwordInput" v-validate="'required|alpha_dash|min:6'" :error-messages="errors.collect('password')" label="Password" type="password" name="password" prepend-icon="lock" required class="mb-5"></v-text-field>

            <!-- Form submit button that prompts API to authenticate. -->
            <v-btn type="submit" dark raised class="primary">Login</v-btn>

            <!-- Beginning of social media logins. -->
            <v-divider class="mt-3 mb-3"></v-divider>

            <!-- Facebook login. -->
            <v-btn class="blue darken-3" dark raised>
              Login with Facebook
            </v-btn>

            <!-- Google+ Login. -->
            <v-btn class="red lighten-2" dark raised>
              Login with Google+
            </v-btn>

            <!-- Redirect user to signup page. -->
            <p class="md-caption">
              <span>New User?</span>
              <router-link to="signup" @click.native="closeDialog()">
                Sign up!
              </router-link>
            </p>
          </v-layout>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: function () {
      return ({
        /**
         * Stores user form input representing user email for logging in.
         * @type {String}
         */
        emailInput: null,
        /**
         * Stores user form input representing secure password.
         * @type {String}
         */
        passwordInput: null,
        /**
         * Stores user form input representing whether user wants to remain
         * signed in.
         * @type {Boolean}
         */
        shouldRemainSignedIn: false
      })
    },
    computed: {
      /**
       * Fetches or sets data controling whether dialog is open or closed.
       * @type {Object}
       */
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
      /**
       * Closes the login dialog.
       * @method closeDialog
       * @return {Void}
       */
      closeDialog () {
        this.$store.commit('setIsLoginDialogOpen', false)
      },
      /**
       * Authenticates user with the API and then logs user into the app.
       * @method login
       * @return {Void}
       * @throws {Error}
       */
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
            /**
             * The user's profile picture object data.
             * @type {Object}
             */
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
