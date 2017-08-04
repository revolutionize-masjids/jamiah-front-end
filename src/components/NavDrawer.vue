<!-- App-wide navigation drawer (sidebar) that slides from the left of the screen and could contain information such as "About Us" and committee member information. -->

<template>
  <md-sidenav class="md-left" ref="navDrawer">
    <md-toolbar class="md-account-header">
      <md-list class="md-transparent">
        <md-list-item class="md-avatar-list">
          <md-avatar class="md-large">
            <md-image :md-src="muslimBrotherImage" alt="People" />
          </md-avatar>

          <span style="flex: 1"></span>

          <md-avatar>
            <md-image :md-src="muslimBrother2Image" alt="People" />
          </md-avatar>

          <md-avatar>
            <md-image :md-src="muslimSisterImage" alt="People" />
          </md-avatar>
        </md-list-item>

        <md-list-item>
          <div class="md-list-text-container">
            <span>Abul Leis</span>
            <span>abul.leis@gmail.com</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-toolbar>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
  </md-sidenav>
</template>

<script>
  import muslimBrotherImage from '@/assets/muslim-brother.jpg'
  import muslimBrother2Image from '@/assets/muslim-brother-2.jpg'
  import muslimSisterImage from '@/assets/muslim-sister.jpg'

  export default {
    data: function () {
      return {
        muslimBrotherImage,
        muslimBrother2Image,
        muslimSisterImage
      }
    },
    methods: {
      // open this nav drawer
      open () {
        this.$refs.navDrawer.open()
      }
    }
  }
</script>

<style lang="sass"></style>
