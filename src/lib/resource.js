// HTTP related things

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'

// use official Vue HTTP client to make web requests and handle responses using a XMLHttpRequest or JSONP
Vue.use(VueResource)

Vue.use(VueAuthenticate, {
  baseUrl: 'https://eejmc.org:6236', // Your API domain

  providers: {
    facebook: {
      clientId: '1857368264592327',
      redirectUri: 'https://eejmc.org:6236' // Your client app URL
    }
  }
})
