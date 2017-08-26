<template>
  <md-layout class="events-page" md-column>
    <h1 class="md-headline">EVENTS</h1>
    <md-layout class="main-content">
      <!-- List out all events -->
      <md-layout class="event-details" md-flex="60" v-for="event in events" :key="event.id" md-column>
        <EventCard :event="event" />
      </md-layout>
      <md-layout class="widgets" md-flex="40" md-column>
        <md-whiteframe></md-whiteframe>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
  import EventCard from '@/components/events-page/EventCard'
  import Events from '@/components/events-page/dummy-data'

  export default {
    components: {
      EventCard
    },
    data: function () {
      return ({
        /** all events to display */
        events: Events
      })
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  .events-page
    margin: $bs * 2 $bs * 5
</style>
