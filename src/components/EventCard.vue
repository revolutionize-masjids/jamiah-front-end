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
              <p class="md-body-1 week-day">              <md-icon>place</md-icon> 42-31 Lexington Ave, New York 10000</p>
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
        <h2 class="md-title">Annual International Art Exhibit</h2>
        <p class="md-body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </md-layout>

      <!-- Comment section -->
      <md-layout md-column>
        <h2 class="md-title">Comments</h2>

        <!-- Add a comment -->
        <form>
          <md-layout md-column>
            <md-input-container>
              <md-input placeholder="Post a comment..."></md-input>
            </md-input-container>
            <md-layout md-align="end">
              <md-button type="submit" class="md-primary md-raised">
                Submit
              </md-button>
            </md-layout>
          </md-layout>
        </form>

        <!-- Comments list -->
        <md-list class="custom-list md-triple-line">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <div class="md-list-text-container">
              <span>Ali Afzar</span>
              <span>Posted 3 days ago</span>
              <p>Salaam brothers and sisters! In order to hose this event, we need a total of 12 volunteers. Please click the link above so that we can receive the aid from you. Thanks!</p>
              <span><md-icon>favorite</md-icon> 2</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">favorite</md-icon>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <div class="md-list-text-container">
              <span>me, Scott, Jennifer</span>
              <span>Summer BBQ</span>
              <p>Wish I could come, but I'm out of town ...</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>favorite_border</md-icon>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/5" alt="People">
            </md-avatar>

            <div class="md-list-text-container">
              <span>Sandra Adams</span>
              <span>Oui oui</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>favorite_border</md-icon>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/8" alt="People">
            </md-avatar>

            <div class="md-list-text-container">
              <span>Trevor Hansen</span>
              <span>Order confirmation</span>
              <p>Thank you for your recent order from ...</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>favorite_border</md-icon>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>
        </md-list>
      </md-layout>
    </md-layout>
  </md-whiteframe>
</template>

<script>
  export default {}
</script>

<style lang="sass">
  // use global variables
  @import '../styles/variables.sass'

  .event-card
    padding: $bs * 5 $bs * 6

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
