import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Harness from '@/components/Harness'

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
        }
      ]
    }
  ]
})
