<template>
  <div>
    <md-button @click.native="authenticate('facebook')">
      Signup with Facebook
    </md-button>
  </div>
</template>

<script>
  export default {
    methods: {
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
