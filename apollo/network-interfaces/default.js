import { createBatchingNetworkInterface } from 'apollo-client'

export default (ctx) => {
  /**
   * Apollo client network interface options.
   * @type {[type]}
   */
  const networkInterface = createBatchingNetworkInterface({
    // TODO: figure out how to use environment variables in Nuxt.js instead of
    // hardcoding the environment-based-endpoint
    /**
       * GraphQL API url based on the environment: dev, prod, etc.
       * @type {String}
       */
    uri: process.env.production.api + '/graphql'
  })

  return networkInterface
}
