// Global styling. This is where Vue Material is injected into the app.
// Define app-wide color palette themes here.

import Vue from 'vue'
import VueMaterial from 'vue-material'

// include the view material styles
import 'vue-material/dist/vue-material.css'

// Use the whole Vue Material library
Vue.use(VueMaterial)

// define theme
const base = {
  primary: {
    color: 'teal',
    hue: 500
  },
  accent: {
    color: 'teal',
    hue: 800
  },
  warn: 'red'
}

Vue.material.registerTheme('default', base)
