<!-- Card representing an event, its details, and a comment section -->

<template>
  <md-whiteframe md-elevation="10" class="event-card">
    <md-layout md-column>
      <!-- Header -->
      <md-layout class="header">
        <md-layout class="event-details" md-align="start" md-flex="50">
          <!-- Colored square with date -->
          <md-layout class="date-square" md-align="center" md-vertical-align="center" md-flex="25" md-column>
            <p class="md-headline day">15</p>
            <p class="md-body-1 month">June</p>
          </md-layout>

          <!-- Time & location -->
          <md-layout class="time-location" md-flex="70" md-flex-offset="5" md-column>
            <div class="time">
              <p class="md-body-1 week-day">Saturday</p>
              <p class="md-body-2 week-day">11am - 3pm</p>
            </div>
            <div class="location">
              <p class="md-body-1 week-day">              <md-icon>place</md-icon> {{ event.address }}</p>
            </div>
          </md-layout>
        </md-layout>

        <!-- Action buttons -->
        <md-layout class="action-buttons" md-align="end" md-flex="50">
          <!-- Share event on social media -->
          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
            <p class="md-caption">Share</p>
          </md-layout>

          <!-- Add event to Google Calender -->
          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>event</md-icon>
            </md-button>
            <p class="md-caption">Add event to calender</p>
          </md-layout>

          <!-- RSVP -->
          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>done</md-icon>
            </md-button>
            <p class="md-caption">Attending</p>
          </md-layout>

          <!-- Like the event -->
          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <p class="md-caption">Like</p>
          </md-layout>

          <!-- Subscribe to  event -->
          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>notifications</md-icon>
            </md-button>
            <p class="md-caption">Notifications: On</p>
          </md-layout>
        </md-layout>
      </md-layout>

      <!-- Title & description of event -->
      <md-layout class="event-description" md-column>
        <h2 class="md-title">{{ event.name }}</h2>
        <p class="md-body-1">
          {{ event.description }}
        </p>
      </md-layout>

      <!-- Comment section -->
      <md-layout md-column>
        <h2 class="md-title">Comments</h2>

        <!-- Add a comment -->
        <form @submit.prevent="addComment()">
          <md-layout md-column>
            <md-input-container class="md-input-container-box">
              <md-input placeholder="Post a comment..." v-model="newCommentText"></md-input>
            </md-input-container>
            <md-layout md-align="end">
              <md-button type="submit" class="md-primary md-raised">
                Submit
              </md-button>
            </md-layout>
          </md-layout>
        </form>

        <!-- List of all comments -->
        <md-list class="md-triple-line" v-for="comment in event.comments" :key="comment.id">
          <Comment :comment="comment" />
        </md-list>
      </md-layout>
    </md-layout>
  </md-whiteframe>
</template>

<script>
  import gql from 'graphql-tag'

  import Comment from '@/components/events-page/Comment'

  export default {
    components: {
      Comment
    },
    /** the data of the event to display */
    props: ['event'],
    data: function () {
      return ({
        /** the text this user is typing to post a comment */
        newCommentText: ''
      })
    },
    methods: {
      /** post a comment to this event */
      addComment () {
        // define the mutation query
        this.$apollo.mutate({
          // query
          mutation: gql`
            mutation addCommentToEvent($eventId: ID!, $body: String!){
              addCommentToEvent(eventId: $eventId, body: $body) {
                _id
                name
                comments {
                  body
                }
              }
            }
          `,
          // parameters
          variables: {
            body: this.newCommentText,
            eventId: this.event['_id']
          }
        })
      }
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  .event-card
    padding: $bs * 5 $bs * 6
    background-color: white
    height: 100%
    width: 100%
    margin-bottom: $bs * 3

    .header
      p
        margin: 0

      .event-details
        .date-square
          width: 100%
          color: white
          background-color: #baacc6

          .day
            margin-bottom: 0

        .time-location
          .time
            color: #9b9b9b

          .location
            color: $color-mat-blue

      .action-buttons
        p
          text-align: center
</style>
