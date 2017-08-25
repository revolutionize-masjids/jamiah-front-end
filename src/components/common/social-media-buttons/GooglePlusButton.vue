<template>
  <md-button class="md-raised google-signup-button social-media-button">
    <md-layout>
      <md-layout md-align="center" md-flex="10" md-flex-offset-xlarge="10">
        <md-icon :md-src="googlePlusLogo"></md-icon>
      </md-layout>
      <md-layout md-align="center" class="button-text">
        <span>Sign up with Google</span>
      </md-layout>
    </md-layout>
  </md-button>
</template>

<script>
  import googlePlusLogo from '@/assets/icons/google-plus-logo.svg'

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
        // assets
        googlePlusLogo
      })
    }
  }
</script>

<style lang="sass">
  .google-signup-button
    background-color: #d34836 !important
    &:hover
      background-color: lighten(#d34836, 10%) !important
</style>
