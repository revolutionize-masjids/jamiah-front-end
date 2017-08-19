//
// Use Apollo client to interface with GraphQL API
// Create an provider that holds Apollo client instances
//

import Vue from 'vue'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

import config from '@/config'

// Install plugin which enables using ApolloClient with Vue
Vue.use(VueApollo)

// Create the apollo client
const apolloClient = new ApolloClient({
  // TODO: figure out how to use createBatchingNetworkInterface to improve
  // performance by putting all JSON objects into an array
  networkInterface: createNetworkInterface({
    // GraphQL API url
    uri: config.api
  }),
  connectToDevTools: true
})

// hold Apollo client instances that can be used by all the child components
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default apolloProvider
