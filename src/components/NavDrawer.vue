<!-- App-wide navigation drawer (sidebar) that slides from the left of the screen and could contain information such as "About Us" and committee member information. -->

<template>
  <md-sidenav class="md-left" ref="navDrawer">
    <md-toolbar class="md-large md-primary">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
  </md-sidenav>
</template>

<script>
  export default {
    methods: {
      // open this nav drawer
      open () {
        this.$refs.navDrawer.open()
      }
    }
  }
</script>

<style lang="sass"></style>
