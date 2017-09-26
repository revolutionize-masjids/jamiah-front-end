<template>
  <v-card class="pa-2">
    <v-layout column>
      <v-flex>
        <v-layout row>
          <v-flex xs4 class="indigo lighten-3 text-xs-center white--text">
            <!-- TODO: improve SEO -->
            <h5 class="headline">15</h5>
            <h5 class="title">June</h5>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    data: function () {
      return ({
        /** all events to display */
        allEvents: null
      })
    },
    methods: {
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
            _id
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
            # get comments for the comment section of the event card
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
