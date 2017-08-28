/**
 * Use and configure Vee Validate to use the v-validate directive to validate
 * forms before they are sent to the API. Read http://vee-validate.logaretm.com
 * to learn more.
 */

import Vue from 'vue'
import VeeValidate from 'vee-validate'

/** configure how forms are validated */
const config = {
  // debounce validation errors for 500 milliseconds
  delay: 500
}

Vue.use(VeeValidate, config)
