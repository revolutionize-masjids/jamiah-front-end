/**
 * Use and configure Vee Validate to use the v-validate directive to validate
 * forms before they are sent to the API. Read http://vee-validate.logaretm.com
 * to learn more.
 */

import Vue from 'vue'
import VeeValidate from 'vee-validate'

/**
 * Configuration of how forms are validated.
 * @type {Object}
 */
const config = {
  // debounce validation errors for 500 milliseconds
  delay: 500
}

// install Vee-Validate
Vue.use(VeeValidate, config)
