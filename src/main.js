/* eslint-disable */

import Vue from 'vue'

import App from './App.vue'
import router from './routes'

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
