<template>
  <md-layout class="events-page" md-column>
    <md-layout class="header">
      <h1 class="md-headline">EVENTS</h1>
      <md-layout md-align="end">
        <md-button class="md-fab" @click.native="openCreateEventDialog()">
          <md-icon>edit</md-icon>
        </md-button>
      </md-layout>
    </md-layout>

    <md-layout class="main-content">
      <!-- List out all events -->
      <md-layout class="event-details" md-flex="60" v-for="event in allEvents" :key="event.id" md-column>
        <EventCard :event="event" />
      </md-layout>
      <md-layout class="widgets" md-flex="40" md-column>
        <md-whiteframe></md-whiteframe>
      </md-layout>
    </md-layout>

    <!-- Dialog to create an event -->
    <OpenCreateEventDialog ref="create-event-dialog" @eventCreated="reload()" />
  </md-layout>
</template>

<script>
  import gql from 'graphql-tag'

  import EventCard from '@/components/events-page/EventCard'
  import OpenCreateEventDialog from '@/components/events-page/OpenCreateEventDialog'

  export default {
    components: {
      EventCard,
      OpenCreateEventDialog
    },
    data: function () {
      return ({
        /** all events to display */
        allEvents: null
      })
    },
    methods: {
      /** open a dialog that lets users create events */
      openCreateEventDialog () {
        this.$refs['create-event-dialog'].open()
      },
      /** update the view with fresh data */
      reload () {
        // update the view when an event is created with new data
      }
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
            comments {
              body
              commenter {
                firstName
                lastName
                avatar {
                  imageUrl
                }
              }
              created
              lastUpdated
              likes {
                firstName
                lastName
              }
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

    h1
      color: $color-primary
      margin-left: $bs * 2
</style>
