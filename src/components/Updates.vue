<!-- Card displaying news and updates -->

<template>
  <md-card class="md-primary updates-card">
    <md-card-header>
      <md-layout md-align="center">
        <md-button>News</md-button>
        <md-button>Updates</md-button>
      </md-layout>
    </md-card-header>

    <md-card-content>
      <md-boards class="md-primary" :md-controls="true">
        <md-board>
          <md-image :md-src="ramadhanMubarakImage" />
          <p>Wishing all our brothers a happy Ramadhan. Taraweeh prayer is expected to start this Friday. Ramadhan Kareem!</p>
        </md-board>
        <md-board>
          <md-image :md-src="sadaqah" />
          <p>We are halfway through our funding of the Masjid! Please donate!</p>
        </md-board>
        <md-board>
          <md-image :md-src="parkingLot" />
          <p>Please don't block the parking lot. We have heard complaints!</p>
        </md-board>
      </md-boards>
    </md-card-content>
  </md-card>
</template>

<script>
  import ramadhanMubarakImage from '@/assets/ramadhan-mubarak.jpg'
  import sadaqah from '@/assets/sadaqah.jpg'
  import parkingLot from '@/assets/parking-lot.jpg'

  export default {
    data: function () {
      return {
        ramadhanMubarakImage,
        sadaqah,
        parkingLot
      }
    }
  }
</script>

<style lang="sass">
  .md-card
    width: 100%

    .md-card-content
      .md-board
        text-align: center
</style>
