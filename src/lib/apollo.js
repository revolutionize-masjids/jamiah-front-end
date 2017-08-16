//
// Use Apollo client to interface with GraphQL API
//

import Vue from 'vue'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

import App from '@/App'
import config from '@/config'

// Install plugin which enables using ApolloClient with Vue
Vue.use(VueApollo)

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    // GraphQL API url
    uri: config.api
  }),
  connectToDevTools: true
})

// hold Apollo client instances that can be used by all the child components
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
