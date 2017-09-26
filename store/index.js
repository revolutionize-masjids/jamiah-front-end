export const state = () => ({
  /** whether user is logged in or not */
  isLoggedIn: false,
  /** whether the login/signup dialog is open */
  isLoginDialogOpen: false,
  /**
   * State containing whether the nav drawer is open or not.
   * @type {Boolean}
   */
  isNavDrawerOpen: false,
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
  },
  /**
   * Mutate the isNavDrawerOpen state to update whether the drawer is open.
   * @method setIsNavDrawerOpen
   * @param  {Object} state - The application state.
   * @param  {Boolean} payload - Whether the drawer is to be opened or not.
   */
  setIsNavDrawerOpen (state, payload) {
    state.isNavDrawerOpen = payload
  }
}
