/**
 * Install the Vuex state management pattern + library into the application
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create a container that holds the entire application's reactive state
const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    /** toggle whether the user is logged in or not */
    toggleSession (state) {
      state.isLoggedIn = !state.isLoggedIn
    }
  }
})

export default store
