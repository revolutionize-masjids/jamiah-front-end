//
// Define URL paths of every page
//

import Vue from 'vue'
import Router from 'vue-router'

// import all the pages
import Harness from '@/components/Harness'
import Signup from '@/components/Signup'
import Home from '@/components/Home'
import Events from '@/components/Events'

Vue.use(Router)

// define routes
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Harness',
      component: Harness,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'events',
          name: 'Events',
          component: Events
        },
        {
          path: 'signup',
          name: 'Signup',
          component: Signup
        }
      ]
    }
  ]
})
