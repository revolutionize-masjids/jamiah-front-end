<!-- Main page of the application. Users are directed here on page load -->

<template>
  <md-layout class="home" md-column>
    <md-layout class="content" md-gutter="40">
      <!-- News & Updates -->
      <md-layout class="left-column" md-flex="60" md-column>
        <md-layout md-flex="70">
          <Updates />
        </md-layout>
        <md-layout md-flex="30">
          <PathToKnowledge />
        </md-layout>
      </md-layout>

      <!-- Prayer Times -->
      <md-layout class="right-column" md-flex="40">
        <PrayerSchedule />
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
  import PrayerSchedule from '@/components/PrayerSchedule'
  import Updates from '@/components/Updates'
  import PathToKnowledge from '@/components/PathToKnowledge'

  export default {
    components: {
      PrayerSchedule,
      Updates,
      PathToKnowledge
    },
    data: function () {
      return ({
        // properties
      })
    },
    methods: {}
  }
</script>

<style lang="sass">
  @import '../styles/variables.sass'

  .home
    .content
      margin: $bs * 5 $bs * 2 !important

      .left-column, .right-column
        height: 100%
</style>
