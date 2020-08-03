/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = []

function lazyLoad(view) {
  return () => import(`@/components/${view}.vue`)
}

routes = [
  {
    path: '*'
  },
  {
    path: '/',
    name: 'index',
    component: lazyLoad('Index')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
