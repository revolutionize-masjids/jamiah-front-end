//
// Use Apollo client to interface with GraphQL API
// Create an provider that holds Apollo client instances
//

import Vue from 'vue'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

import config from '@/config'

// Install plugin which enables using ApolloClient with Vue
Vue.use(VueApollo)

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    // GraphQL API url
    uri: config.api + '/graphql'
  }),
  connectToDevTools: true
})

// hold Apollo client instances that can be used by all the child components
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default apolloProvider
