<!-- How users will be able to sign up to the app. They can use social media accounts like Facebook and possibly make their own accounts using custom email and password. -->

<template>
  <md-layout md-align="center" class="signup-page">
    <md-whiteframe md-elevation="6">
      <form @submit.prevent="validateBeforeSubmit">
        <div class="md-headline">Sign Up</div>

        <!-- Main content -->
        <md-layout md-gutter="40" class="main-content">
          <!-- Manual signup section -->
          <md-layout md-column class="manual-signup stretch-height" md-flex="55">
            <md-layout md-gutter="24" class="form-row">
              <!-- First name -->
              <md-layout md-flex="50">
                <md-input-container
                :class="{ 'md-input-invalid': errors.has('firstName') }">
                  <label>First Name</label>
                  <md-input v-validate="'required|alpha'" v-model="firstName" type="text" name="firstName" required />
                  <span class="md-error">
                    {{ errors.first('firstName') }}
                  </span>
                </md-input-container>
              </md-layout>
              <!-- Last name -->
              <md-layout md-flex="50">
                <md-input-container
                :class="{ 'md-input-invalid': errors.has('lastName') }">
                  <label>Last Name</label>
                  <md-input v-validate="'required|alpha'" v-model="lastName" type="text" name="lastName" required />
                  <span class="md-error">
                    {{ errors.first('lastName') }}
                  </span>
                </md-input-container>
              </md-layout>
            </md-layout>

            <!-- Email -->
            <md-layout class="form-row">
              <md-input-container
              :class="{ 'md-input-invalid': errors.has('email') }">
                <label>Email</label>
                <md-input v-validate="'required|email'" v-model="email" type="email" name="email" required />
                <span class="md-error">
                  {{ errors.first('email') }}
                </span>
              </md-input-container>
            </md-layout>

            <!-- Password & confirmation -->
            <md-layout md-gutter="24" class="form-row">
              <!-- Password -->
              <md-layout md-flex="50">
                <!-- Password must be alphanumeric characters min 6 chars -->
                <md-input-container
                :class="{ 'md-input-invalid': errors.has('password') }">
                  <label>Password</label>
                  <md-input v-validate="'required|alpha_num|min:6'" type="password" v-model="password" name="password" required />
                  <span class="md-error">
                    {{ errors.first('password') }}
                  </span>
                </md-input-container>
              </md-layout>
              <!-- Confirm password -->
              <md-layout md-flex="50">
                <md-input-container
                :class="{ 'md-input-invalid': errors.has('confirmPassword') }">
                  <label>Confirm Password</label>
                  <md-input v-validate="'required|confirmed:password'" type="password" v-model="confirmPassword" name="confirmPassword" required />
                  <span class="md-error">
                    {{ errors.first('confirmPassword') }}
                  </span>
                </md-input-container>
              </md-layout>
            </md-layout>

            <md-layout md-align="center" class="form-row">
              <p>
                <strong>By clicking, you are agreeing with the</strong>
                <a href="#">Terms and Agreements</a>
              </p>
              <md-button class="md-primary md-raised stretch-width submit-button" type="submit">
                Sign Up
              </md-button>
            </md-layout>
            <!-- </md-layout> -->
          </md-layout>

          <!-- Sign up with social media -->
          <md-layout class="social-media-signup" md-column md-flex="45">
            <!-- Signup with Facebook -->
            <md-layout md-align="center" md-vertical-align="center" md-column>
              <p class="md-caption">OR</p>
              <p class="md-caption">Log in faster by signing up through your social media account</p>
              <md-button class="md-raised facebook-signup-button social-media-button" @click.native="authenticate('facebook')">
                <md-icon :md-src="facebookLogo"></md-icon>
                <span>Sign up with Facebook</span>
              </md-button>
              <md-button class="md-raised google-signup-button social-media-button">
                <md-icon :md-src="googlePlusLogo"></md-icon>
                <span>Sign in with Google</span>
              </md-button>
            </md-layout>
          </md-layout>
        </md-layout>
      </form>
    </md-whiteframe>
  </md-layout>
</template>

<script>
  import gql from 'graphql-tag'

  import facebookLogo from '@/assets/icons/facebook-logo.svg'
  import googlePlusLogo from '@/assets/icons/google-plus-logo.svg'

  export default {
    data: function () {
      return ({
        // signup form model
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,

        // assets
        facebookLogo,
        googlePlusLogo
      })
    },
    // define queries
    apollo: {},
    mounted: function () {
      this.$on('form-submitted', () => {
        this.createUser()
      })
    },
    methods: {
      // create a new user using the enter email and password
      createUser () {
        // send a mutation to the api
        this.$apollo.mutate({
          // define the mutation using GraphQL syntax
          mutation: gql`
            mutation CreateAUser($userEmail: String!, $userPassword: String!, $firstName: String!, $lastName: String!) {
              createUser(email: $userEmail, password: $userPassword, firstName: $firstName, lastName: $lastName) {
                _id
                email
                password
                firstName
                lastName
              }
            }
          `,
          // define the variables to be used as parameters for the mutation
          variables: {
            userEmail: this.email,
            userPassword: this.password,
            firstName: this.firstName,
            lastName: this.lastName
          }
        })
      },
      // Use the Vue-Authenticate package to authenticate account via social
      // media
      async authenticate (provider) {
        try {
          await this.$auth.authenticate(provider)
          // Execute application logic after successful social authentication
          console.log('successfully authenticated')
        } catch (error) {
          console.log('error authenticating', error)
        }
      },
      // validate the form before submission to make sure there are no errors
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            this.$emit('form-submitted')
            return
          }

          alert('Correct them errors!')
        })
      }
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

  .signup-page
    .md-whiteframe
      height: $bs * 72
      width: $bs * 160
      margin: $bs * 8 $bs * 13
      background-color: white

      form
        margin: $bs * 9 $bs * 18 $bs * 11 $bs * 18

        .md-headline
          color: black

        .main-content
          margin-top: $bs * 5

          .md-button
            margin-left: 0
            margin-right: 0

          .manual-signup
            .form-row
              padding-top: 0
              padding-bottom: 0

              .md-input-container
                margin-top: 0

                .md-input, label
                  padding-left: $bs

                .md-input
                  border: 1px solid $color-accent
                  height: $bs * 5

              a
                color: $color-mat-blue

          .social-media-signup
            .social-media-button
              color: white
              padding: $bs / 2 $bs / 2 $bs /2 $bs * 3
              width: $bs * 43
              font-weight: lighter
              border-radius: 0
              text-transform: none
              text-align: left

              .md-icon
                margin-right: $bs * 5

            .facebook-signup-button
              background-color: #3b5998
              &:hover
                background-color: lighten(#3b5998, 10%)

            .google-signup-button
              background-color: #d34836
              &:hover
                background-color: lighten(#d34836, 10%)
</style>
