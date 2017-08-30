/**
 * Install the Vuex state management pattern + library into the application.
 * To learn more: https://vuex.vuejs.org
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create a container that holds the entire application's reactive state
const store = new Vuex.Store({
  state: {
    /** whether user is logged in or not */
    isLoggedIn: false,
    /** whether the login/signup dialog is open */
    isLoginDialogOpen: false,
    /** general user information */
    user: {
      userId: null,
      firstName: null,
      lastName: null,
      email: null,
      /** profile picture */
      avatar: null
    }
  },
  mutations: {
    /** update app state to reflect that user logged in */
    login (state, payload) {
      state.isLoggedIn = true
      state.user = payload
    },
    /** update app state to reflect that user logged out */
    logout (state) {
      state.isLoggedIn = false
    },
    /** open or close the login/signup dialog */
    setIsLoginDialogOpen (state, payload) {
      state.isLoginDialogOpen = payload
    }
  }
})

export default store
