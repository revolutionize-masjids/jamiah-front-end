<template>
  <md-layout class="events-page" md-column>
    <h1 class="md-headline">EVENTS</h1>
    <md-layout class="main-content">
      <md-layout class="event-details" md-flex="60" md-column>
        <EventCard/>
      </md-layout>
      <md-layout class="widgets" md-flex="40" md-column>
        <md-whiteframe></md-whiteframe>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
  import EventCard from '@/components/events-page/EventCard'

  export default {
    components: {
      EventCard
    }
  }
</script>

<style lang="sass">
  // use global variables
  @import '../../styles/variables.sass'

  .events-page
    margin: $bs * 2 $bs * 5
</style>
