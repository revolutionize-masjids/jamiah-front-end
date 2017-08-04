<!-- Jama'at congregation times -->

<template>
  <md-card class="prayer-schedule md-accent">

    <!-- Content Above Prayer Times -->
    <md-card-header>
      <div class="masjid-image">
        <md-image :md-src="MasjidImage" />
      </div>
      <md-toolbar class="md-primary">
        <span class="md-title">Prayer Times</span>
      </md-toolbar>
    </md-card-header>

    <!-- Table displaying Jama'at Times -->
    <md-card-content>
      <md-table>
        <!-- Column labels -->
        <md-table-header>
          <md-table-row>
            <md-table-head></md-table-head>
            <md-table-head>Salah</md-table-head>
            <md-table-head>Adhan</md-table-head>
            <md-table-head>Iqaamah</md-table-head>
          </md-table-row>
        </md-table-header>

        <!-- Table content -->
        <md-table-body>
          <!-- Fajr -->
          <md-table-row>
            <md-table-cell>
              <md-avatar>
                <md-image :md-src="SunriseImage" alt="People" />
              </md-avatar>
            </md-table-cell>
            <md-table-cell>Fajr</md-table-cell>
            <md-table-cell>5:15 AM</md-table-cell>
            <md-table-cell>5:30 AM</md-table-cell>
          </md-table-row>

          <!-- Dhuhr -->
          <md-table-row>
            <md-table-cell>
              <md-avatar>
                <md-image :md-src="MidDayImage" alt="People" />
              </md-avatar>
            </md-table-cell>
            <md-table-cell>Dhuhr</md-table-cell>
            <md-table-cell>1:15 PM</md-table-cell>
            <md-table-cell>1:30 PM</md-table-cell>
          </md-table-row>

          <!-- 'Asr -->
          <md-table-row>
            <md-table-cell>
              <md-avatar>
                <md-image :md-src="AfternoonImage" alt="People" />
              </md-avatar>
            </md-table-cell>
            <md-table-cell>'Asr</md-table-cell>
            <md-table-cell>5:15 PM</md-table-cell>
            <md-table-cell>5:30 PM</md-table-cell>
          </md-table-row>

          <!-- Maghrib -->
          <md-table-row>
            <md-table-cell>
              <md-avatar>
                <md-image :md-src="SunsetImage" alt="People" />
              </md-avatar>
            </md-table-cell>
            <md-table-cell>Maghrib</md-table-cell>
            <md-table-cell>8:27 PM</md-table-cell>
            <md-table-cell>8:27 PM</md-table-cell>
          </md-table-row>

          <!-- Isha' -->
          <md-table-row>
            <md-table-cell>
              <md-avatar>
                <md-image :md-src="NightImage" alt="People" />
              </md-avatar>
            </md-table-cell>
            <md-table-cell>'Isha</md-table-cell>
            <md-table-cell>10:15 PM</md-table-cell>
            <md-table-cell>10:30 PM</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
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
          width: 40%

    .md-card-content
      .md-table
        background-color: white
</style>
