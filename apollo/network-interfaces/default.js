import { createBatchingNetworkInterface } from 'apollo-client'

/**
 * Apollo client network interface options.
 * @type {[type]}
 */
const networkInterface = createBatchingNetworkInterface({
  /**
     * GraphQL API url based on the environment: dev, prod, etc.
     * @type {String}
     */
  uri: process.env[process.env.NODE_ENV].api + '/graphql'
})

export default networkInterface
