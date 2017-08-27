/**
 * Install the Vuex state management pattern + library into the application
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create a container that holds the entire application's reactive state
const store = new Vuex.Store({
  state: {
    /** whether user is logged in or not */
    isLoggedIn: false
  },
  mutations: {
    /** update app state to reflect that user logged in */
    login (state) {
      state.isLoggedIn = true
    },
    /** update app state to reflect that user logged out */
    logout (state) {
      state.isLoggedIn = false
    }
  }
})

export default store
