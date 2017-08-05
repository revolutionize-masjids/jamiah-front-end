<!-- Main page of the application. Users are directed here on page load -->

<template>
  <md-layout class="home" md-column>
    <md-layout class="content" md-gutter="40">
      <!-- News & Updates -->
      <md-layout class="updates-container" md-flex="60">
        <Updates />
      </md-layout>

      <!-- Prayer Times -->
      <md-layout md-flex="40">
        <PrayerSchedule />
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
  import PrayerSchedule from '@/components/PrayerSchedule'
  import Updates from '@/components/Updates'

  export default {
    components: {
      PrayerSchedule,
      Updates
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables.sass'

  .home
    .content
      margin: $bs * 5 $bs * 2
</style>
