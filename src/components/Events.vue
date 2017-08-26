<template>
  <md-layout md-column>
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
  import EventCard from '@/components/EventCard'

  export default {
    components: {
      EventCard
    }
  }
</script>

<style lang="sass"></style>
