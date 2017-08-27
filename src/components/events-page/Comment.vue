<template>
  <md-list-item>
    <md-avatar>
      <img src="https://placeimg.com/40/40/people/1" alt="People">
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{ `${comment.commenter.firstName} ${comment.commenter.lastName}` }}</span>
      <span>Posted {{ comment.postedElapsedtime }} days ago</span>
      <p>{{ comment.body }}</p>
      <span><md-icon>favorite</md-icon> {{ comment.likes }}</span>
    </div>

    <md-button class="md-icon-button md-list-action">
      <md-icon class="md-primary" v-if="comment.didUserLike">favorite</md-icon>
      <md-icon class="md-primary" v-else>favorite_border</md-icon>
    </md-button>

    <md-divider class="md-inset"></md-divider>
  </md-list-item>
</template>

<script>
  export default {
    props: ['comment'],
    data: function () {
      return ({})
    }
  }
</script>

<style lang="sass"></style>
