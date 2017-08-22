// define secret configuration for development vs. production

const config = {
  production: {
    // Use the production api hosted on AWS Elastic Computer Cloud
    api: 'http://ec2-18-220-225-171.us-east-2.compute.amazonaws.com:8091'
  },
  development: {
    // Use the development API hosted locally
    // NOTE: make sure to `$ yarn run dev` on the back end repo locally
    api: 'http://localhost:8091'
  }
}

// use the configuration according to the environment (dev vs. production)
export default config[process.env.NODE_ENV]
