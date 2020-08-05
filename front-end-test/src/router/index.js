import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Legal from '../views/Legal.vue'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal
    },
  ]
})

// const router = new VueRouter({
//   routes
// })

// export default router
