<!-- Main page of the application. Users are directed here on page load -->

<template>
  <md-layout md-column>
    <md-layout>
      <md-layout md-flex="60">
        <Updates />
      </md-layout>
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

<style lang="sass"></style>
