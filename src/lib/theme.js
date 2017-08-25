// Use Vue Material to easily bootstrap the front end with components that obey
// Google Material Design specifications. Register app-wide themes.

import Vue from 'vue'
import VueMaterial from 'vue-material'

// include the view material styles
import 'vue-material/dist/vue-material.css'

// import global styles
import '@/styles/application.sass'

// Use the whole Vue Material library
Vue.use(VueMaterial)

// define the color scheme (theme) for the app
const base = {
  primary: {
    color: 'teal',
    hue: 500
  },
  accent: {
    color: 'teal',
    hue: 'A700'
  },
  warn: 'red'
}

// register the defined themes
Vue.material.registerTheme('default', base)
