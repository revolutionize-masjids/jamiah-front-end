// The entry point of the whole application where the root component is created

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from '@/App'
import router from '@/router'
import apolloProvider from '@/lib/apollo'
import store from '@/lib/vuex'
import '@/lib/theme'
import '@/lib/resource'
import '@/lib/vee-validate'

Vue.config.productionTip = false

/* eslint-disable no-new */
// create the main Vue instance to run our root component in
new Vue({
  el: '#app',
  router,
  apolloProvider,
  // inject the Vuex store into all child components
  store,
  template: '<App/>',
  components: { App }
})
