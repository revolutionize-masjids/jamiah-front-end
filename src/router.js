// Define paths of every page component, etc.

import Vue from 'vue'
import Router from 'vue-router'

import Harness from '@/components/Harness'
import Signup from '@/components/Signup'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Harness',
      component: Harness,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
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
