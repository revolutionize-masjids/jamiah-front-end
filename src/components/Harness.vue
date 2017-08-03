<template>
  <md-toolbar class="md-large">
    <div class="md-toolbar-container">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <span style="flex: 1;"></span>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>
    </div>

    <div class="md-toolbar-container">
      <h2 class="md-title">East Elmhurst Jam-E Muslim Center</h2>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
