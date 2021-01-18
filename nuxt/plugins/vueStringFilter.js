import Vue from 'vue'
import helpers from './helpers'
// stackoverflow.com/questions/42613061/vue-js-making-helper-functions-globally-available-to-single-file-components

const plugin = {
  install() {
    Vue.helpers = helpers
    Vue.prototype.$helpers = helpers
  }
}

Vue.use(plugin)
