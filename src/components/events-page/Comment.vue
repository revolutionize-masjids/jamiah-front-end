<template>
  <md-list-item>
    <md-avatar>
      <img src="https://placeimg.com/40/40/people/1" alt="People">
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{ name }}</span>
      <span>Posted {{postedElapsedtime }} days ago</span>
      <p>{{ comment }}</p>
      <span><md-icon>favorite</md-icon> {{ likes }}</span>
    </div>

    <md-button class="md-icon-button md-list-action">
      <md-icon class="md-primary" v-if="didUserLike">favorite</md-icon>
      <md-icon class="md-primary" v-else>favorite_border</md-icon>
    </md-button>

    <md-divider class="md-inset"></md-divider>
  </md-list-item>
</template>

<script>
  export default {
    data: function () {
      return ({
        name: 'Ali Afzar',
        postedElapsedtime: 3,
        comment: 'Salaam brothers and sisters! In order to hose this event, we need a total of 12 volunteers. Please click the link above so that we can receive the aid from you. Thanks!',
        likes: 2,
        didUserLike: true
      })
    }
  }
</script>

<style lang="sass"></style>
