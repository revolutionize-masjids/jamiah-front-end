<!-- Main page of the application. Users are directed here on page load -->

<template>
  <div>
    <h1>Home</h1>
    <PrayerSchedule />
  </div>
</template>

<script>
  import PrayerSchedule from '@/components/PrayerSchedule'

  export default {
    components: {
      PrayerSchedule
    }
  }
</script>

<style lang="sass"></style>
