<!-- How users will be able to sign up to the app. They can use social media accounts like Facebook and possibly make their own accounts using custom email and password. -->

<template>
  <md-layout md-align="center" signup-page>
    <md-whiteframe>
      <form @submit.stop.prevent="createUser">
        <div class="md-title">Create Account</div>

        <!-- Main content -->
        <md-layout>
          <!-- Manual signup section -->
          <md-layout md-column manual-signup>
            <md-layout>
              <md-input-container>
                <label>First Name</label>
                <md-input v-model="firstName" type="text" required />
              </md-input-container>

              <md-input-container>
                <label>Last Name</label>
                <md-input v-model="lastName" type="text" required />
              </md-input-container>
            </md-layout>

            <md-input-container>
              <label>Email</label>
              <md-input v-model="email" type="email" required />
            </md-input-container>

            <md-input-container md-has-password>
              <label>Password</label>
              <md-input type="password" v-model="password" required />
            </md-input-container>

            <md-input-container md-has-password>
              <label>Re-enter Password</label>
              <md-input type="password" v-model="confirmPassword" required />
            </md-input-container>
          </md-layout>

          <!-- Sign up with social media -->
          <md-layout md-column social-media-signup>
            <!-- Signup with Facebook -->
            <!-- <md-button @click.native="authenticate('facebook')">
              Signup with Facebook
            </md-button> -->
            <md-button class="md-raised">Sign in with Facebook</md-button>
            <md-button class="md-raised">Sign in with Google</md-button>
          </md-layout>
        </md-layout>

        <md-layout md-align="end">
          <!-- Create a user when user clicks Sign Up button. Disable button if password isn't confirmed -->
          <md-button type="submit" @click.native="createUser()" :disabled="!isPasswordValid">
            Sign Up
          </md-button>
        </md-layout>
      </form>
    </md-whiteframe>
  </md-layout>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    data: function () {
      return ({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null
      })
    },
    // define queries
    apollo: {},
    methods: {
      // create a new user using the enter email and password
      createUser () {
        // send a mutation to the api
        this.$apollo.mutate({
          // define the mutation using GraphQL syntax
          mutation: gql`
            mutation CreateAUser($userEmail: String!, $userPassword: String!) {
              createUser(email: $userEmail, password: $userPassword) {
                _id
                email
                password
              }
            }
          `,
          // define the variables to be used as parameters for the mutation
          variables: {
            userEmail: this.email,
            userPassword: this.password
          }
        })
      }
      // Use the Vue-Authenticate package to authenticate account via social media
      // async authenticate (provider) {
      //   try {
      //     await this.$auth.authenticate(provider)
      //     // Execute application logic after successful social authentication
      //
      //     console.log('successfully authenticated')
      //   } catch (error) {
      //     console.log('error authenticating', error)
      //   }
      // }
    },
    computed: {
      // see if password is confirmed and valid
      isPasswordValid: function () {
        return this.password !== null && this.password === this.confirmPassword
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../styles/variables.sass'

  [signup-page]
    .md-whiteframe
      height: 100%
      width: 100%
      margin: $bs * 2

      .md-title
        text-align: center
</style>
