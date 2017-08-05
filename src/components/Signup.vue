<!-- How users will be able to sign up to the app. They can use social media accounts like Facebook and possibly make their own accounts using custom email and password. -->

<template>
  <div>
    <!-- Signup with Facebook -->
    <md-button @click.native="authenticate('facebook')">
      Signup with Facebook
    </md-button>
  </div>
</template>

<script>
  export default {
    methods: {
      // Use the Vue-Authenticate package to authenticate account via social media
      async authenticate (provider) {
        try {
          await this.$auth.authenticate(provider)
          // Execute application logic after successful social authentication

          console.log('successfully authenticated')
        } catch (error) {
          console.log('error authenticating', error)
        }
      }
    }
  }
</script>

<style lang="sass"></style>
