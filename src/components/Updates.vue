<!-- Card displaying news and updates -->

<template>
  <md-card class="updates-card">
    <!-- Top toolbar for navigating between "news" and "updates" -->
    <md-card-header>
      <md-layout md-align="center">
        <md-button>News</md-button>
        <md-button>Updates</md-button>
      </md-layout>
    </md-card-header>

    <!-- Main content -->
    <md-card-content>
      <md-boards class="md-primary" :md-controls="true">
        <!-- Boards that will display content for news or updates. This will be fetched from the API and looped -->
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
  // import assets
  import ramadhanMubarakImage from '@/assets/ramadhan-mubarak.jpg'
  import sadaqah from '@/assets/sadaqah.jpg'
  import parkingLot from '@/assets/parking-lot.jpg'

  export default {
    data: function () {
      return {
        // add asset reference properties
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
