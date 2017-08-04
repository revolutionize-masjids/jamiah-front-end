<!-- Main page of the application. Users are directed here on page load -->

<template>
  <md-layout md-column>
    <md-layout>
      <!-- News & Updates -->
      <md-layout md-flex="70">
        <Updates />
      </md-layout>

      <!-- Prayer Times -->
      <md-layout md-flex="30">
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

<style lang="sass"></style>
