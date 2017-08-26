<!-- Card representing an event, its details, and a comment section -->

<template>
  <md-whiteframe class="event-card">
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
              <p class="md-body-1 week-day">              <md-icon>place</md-icon> {{ address }}</p>
            </div>
          </md-layout>
        </md-layout>

        <!-- Action buttons -->
        <md-layout class="action-buttons" md-align="end" md-flex="50">
          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
            <p class="md-caption">Share</p>
          </md-layout>

          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>event</md-icon>
            </md-button>
            <p class="md-caption">Add event to calender</p>
          </md-layout>

          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>done</md-icon>
            </md-button>
            <p class="md-caption">Attending</p>
          </md-layout>

          <md-layout md-flex="20" md-vertical-align="center" md-column>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <p class="md-caption">Like</p>
          </md-layout>

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
        <h2 class="md-title">{{ name }}</h2>
        <p class="md-body-1">
          {{ description }}
        </p>
      </md-layout>

      <!-- Comment section -->
      <md-layout md-column>
        <h2 class="md-title">Comments</h2>

        <!-- Add a comment -->
        <form>
          <md-layout md-column>
            <md-input-container>
              <md-input placeholder="Post a comment..." v-model="newCommentText"></md-input>
            </md-input-container>
            <md-layout md-align="end">
              <md-button type="submit" class="md-primary md-raised">
                Submit
              </md-button>
            </md-layout>
          </md-layout>
        </form>

        <!-- Comments list -->
        <md-list class="md-triple-line">
          <Comment />
        </md-list>
      </md-layout>
    </md-layout>
  </md-whiteframe>
</template>

<script>
  import Comment from '@/components/events-page/Comment'

  export default {
    components: {
      Comment
    },
    data: function () {
      return ({
        /** name of the event */
        name: 'Annual International Art Exhibit',
        /** event body text */
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        /** data & time event starts */
        dateStart: null,
        /** date & time event ends */
        dateEnd: null,
        /** location this event is being held */
        address: '42-31 Lexington Ave, New York 10000',
        /** amount of people attending this event */
        attendees: 0,
        /** amount of people who liked this event */
        likes: 0,
        /** whether current user is subscribed to this event */
        isNotificationsOn: true,
        /** the text this user is typing to post a comment */
        newCommentText: '',
        /** posted comments for this event */
        comments: []
      })
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
