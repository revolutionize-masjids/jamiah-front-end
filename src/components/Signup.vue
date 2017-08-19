<!-- How users will be able to sign up to the app. They can use social media accounts like Facebook and possibly make their own accounts using custom email and password. -->

<template>
  <md-layout root-element>
    <!-- Signup with Facebook -->
    <!-- <md-button @click.native="authenticate('facebook')">
      Signup with Facebook
    </md-button> -->
    <md-layout md-align="center" md-vertical-align="center">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Sign Up</div>
            <div class="subhead">Start engaging with your own community!</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
              <label>Email</label>
              <md-input v-model="email" type="email" required></md-input>
            </md-input-container>

            <md-input-container md-has-password>
              <label>Password</label>
              <md-input type="password" v-model="password" required></md-input>
            </md-input-container>
          </form>
        </md-card-content>
        <md-card-actions>
          <md-layout md-align="end">
            <!-- Create a user when user clicks Sign Up button -->
            <md-button @click.native="createUser()">Sign Up</md-button>
          </md-layout>
        </md-card-actions>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    data: function () {
      return ({
        email: null,
        password: null
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
    }
  }
</script>

<style lang="sass">
  [root-element]
    height: 100vh
</style>
