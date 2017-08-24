// HTTP related things

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'

import config from '@/config'

// use official Vue HTTP client to make web requests and handle responses using a XMLHttpRequest or JSONP
Vue.use(VueResource)

// use vue-authenticate for social media authentication
Vue.use(VueAuthenticate, {
  baseUrl: config.api + '/grapql', // Your API domain

  // all the social media sites we support for authentication
  providers: {
    facebook: {
      // clientId fetched from FB's dev tools after registering the app's domain to use social media authentication
      clientId: '1857368264592327',
      redirectUri: 'http://localhost:6236'
    }
  }
})
