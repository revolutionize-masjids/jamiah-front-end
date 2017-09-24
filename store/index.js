export const state = () => ({
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
})

export const mutations = {
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
