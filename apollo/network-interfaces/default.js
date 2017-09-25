import { createBatchingNetworkInterface } from 'apollo-client'

export default (ctx) => {
  console.log(process.env[process.env.NODE_ENV])
  /**
   * Apollo client network interface options.
   * @type {[type]}
   */
  const networkInterface = createBatchingNetworkInterface({
    /**
       * GraphQL API url based on the environment: dev, prod, etc.
       * @type {String}
       */
    uri: process.env[process.env.NODE_ENV] + '/graphql'
  })

  return networkInterface
}
