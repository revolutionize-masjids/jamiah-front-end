<!-- A dialog that allows the user to create events -->

<template>
  <md-dialog ref="dialog">
    <md-dialog-title>
      <h2 class="md-headline">Create an event</h2>
    </md-dialog-title>
    <md-dialog-content>
      <!-- Create the event if form is validated -->
      <form @submit.prevent="createEvent()">
        <md-layout md-column>
          <md-input-container>
            <label>Event name</label>
            <md-input v-model="eventName" />
          </md-input-container>
          <md-input-container>
            <label>Event description</label>
            <md-input v-model="eventDescription" />
          </md-input-container>
          <md-input-container>
            <label>Event address</label>
            <md-input v-model="eventAddress" />
          </md-input-container>
          <md-button type="submit" class="md-primary md-raised">
            Submit
          </md-button>
        </md-layout>
      </form>
    </md-dialog-content>
  </md-dialog>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    data: function () {
      return ({
        eventName: null,
        eventDescription: null,
        eventAddress: null
      })
    },
    methods: {
      /** opens this dialog */
      open () {
        this.$refs.dialog.open()
      },
      /** send a request to the API to create an event */
      async createEvent () {
        try {
          await this.$apollo.mutate({
            // define the mutation using GraphQL query syntax
            mutation: gql`
              mutation CreateAnEvent($eventName: String!, $eventDescription: String!, $eventAddress: String!) {
                createEvent(name: $eventName, description: $eventDescription, address: $eventAddress) {
                  _id
                  name
                  description
                  address
                }
              }
            `,
            // define the parameters for the mutation
            variables: {
              eventName: this.eventName,
              eventDescription: this.eventDescription,
              eventAddress: this.eventAddress
            }
          })

          // handle successful creation of an event
          this.$emit('eventCreated')
        } catch (error) {
          // handle errors
          console.log(error)
        }
      }
    }
  }
</script>

<style lang="sass"></style>
