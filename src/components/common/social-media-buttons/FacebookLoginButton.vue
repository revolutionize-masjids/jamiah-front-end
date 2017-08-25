<!-- Button that allows user to log in or sign up via Facebook -->

<template>
  <md-button class="md-raised facebook-signup-button social-media-button" @click.native="authenticate('facebook')">
    <md-layout>
      <md-layout md-align="center" md-flex="10" md-flex-offset-xlarge="10">
        <md-icon :md-src="facebookLogo"></md-icon>
      </md-layout>
      <md-layout md-align="center" class="button-text">
        <span>Sign up with Facebook</span>
      </md-layout>
    </md-layout>
  </md-button>
</template>

<script>
  import facebookLogo from '@/assets/icons/facebook-logo.svg'

  export default {
    methods: {
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
      }
    },
    data: function () {
      return ({
        facebookLogo
      })
    }
  }
</script>

<style lang="sass">
  .facebook-signup-button
    background-color: #3b5998 !important
    &:hover
      background-color: lighten(#3b5998, 10%) !important
</style>
