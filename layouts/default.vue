<!-- This is the root component; the parent & first component that renders. -->

<template>
  <v-app toolbar light>
    <NavToolbar />
    <NavDrawer />
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <nuxt />
        </v-slide-y-transition>
      </v-container>
    </main>
    <BottomNav />
  </v-app>
</template>

<script>
  import NavToolbar from '@/components/NavToolbar/NavToolbar.vue'
  import NavDrawer from '@/components/NavDrawer.vue'
  import BottomNav from '@/components/BottomNav.vue'

  export default {
    components: {
      NavToolbar,
      NavDrawer,
      BottomNav
    }
  }
</script>
