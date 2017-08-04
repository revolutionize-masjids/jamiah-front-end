<!-- Jama'at congregation times -->

<template>
  <md-card class="prayer-schedule md-accent">
    <md-card-header>
      <div class="masjid-image">
        <md-image :md-src="MasjidImage" />
      </div>
      <md-toolbar class="md-primary">
        <span class="md-title">Jama'at Times</span>
      </md-toolbar>
    </md-card-header>
    <md-card-content>
      <md-list>
        <!-- Fajr -->
        <md-list-item>
          <md-avatar>
            <md-image :md-src="SunriseImage" alt="People" />
          </md-avatar>
          <span>Fajr</span>
          <span>5:30 AM</span>
        </md-list-item>

        <md-divider></md-divider>

        <!-- Dhuhr -->
        <md-list-item>
          <md-avatar>
            <md-image :md-src="MidDayImage" alt="People"/></md-image>
          </md-avatar>
          <span>Dhuhr</span>
          <span>1:30 PM</span>
        </md-list-item>

        <md-divider></md-divider>

        <!-- 'Asr -->
        <md-list-item>
          <md-avatar>
            <md-image :md-src="AfternoonImage" alt="People"/></md-image>
          </md-avatar>
          <span>'Asr</span>
          <span>4:30 PM</span>
        </md-list-item>

        <md-divider></md-divider>

        <!-- Maghrib -->
        <md-list-item>
          <md-avatar>
            <md-image :md-src="SunsetImage" alt="People"/></md-image>
          </md-avatar>
          <span>Maghrib</span>
          <span>8:00 PM</span>
        </md-list-item>

        <md-divider></md-divider>

        <!-- 'Isha -->
        <md-list-item>
          <md-avatar>
            <md-image :md-src="NightImage" alt="People"/></md-image>
          </md-avatar>
          <span>'Isha</span>
          <span>10:30 PM</span>
        </md-list-item>
      </md-list>
    </md-card-content>
  </md-card>
</template>

<script>
  // import assets
  import MasjidImage from '@/assets/masjid-icon.png'
  import SunriseImage from '@/assets/sunrise.jpg'
  import MidDayImage from '@/assets/mid-day.jpg'
  import AfternoonImage from '@/assets/afternoon.jpg'
  import SunsetImage from '@/assets/sunset.jpg'
  import NightImage from '@/assets/night.png'

  export default {
    data: function () {
      return {
        // add image reference properties
        MasjidImage,
        SunriseImage,
        MidDayImage,
        AfternoonImage,
        SunsetImage,
        NightImage
      }
    }
  }
</script>

<style lang="sass">
  .prayer-schedule
    .md-card-header
      .masjid-image
        text-align: center

        .md-image
          width: 50%
</style>
