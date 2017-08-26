<template>
  <md-layout class="events-page" md-column>
    <h1 class="md-headline">EVENTS</h1>
    <md-layout class="main-content">
      <!-- List out all events -->
      <md-layout class="event-details" md-flex="60" v-for="event in allEvents" :key="event.id" md-column>
        <EventCard :event="event" />
      </md-layout>
      <md-layout class="widgets" md-flex="40" md-column>
        <md-whiteframe></md-whiteframe>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
  import gql from 'graphql-tag'

  import EventCard from '@/components/events-page/EventCard'

  export default {
    components: {
      EventCard
    },
    data: function () {
      return ({
        /** all events to display */
        allEvents: null
      })
    },
    /** define GraphQL requests & interface with API */
    apollo: {
      // fetch all created events and store them in the events property
      allEvents: gql`
        query {
          allEvents {
            name
            description
            address
            attendees {
              firstName
              lastName
            }
            likes {
              firstName
              lastName
            }
            subscribedUsers {
              firstName
              lastName
            }
            volunteers {
              firstName
              lastName
            }
          }
        }
      `
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  .events-page
    margin: $bs * 2 $bs * 5
</style>
