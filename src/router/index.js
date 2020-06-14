import Vue from 'vue'
import VueRouter from 'vue-router'
import vMore from '@/components/v-more'
import Books from '@/components/Books'
import bAbout from '@/components/bAbout'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bAbout',
      component: bAbout
    },
    {
      path: '/vmore',
      name: 'vmore',
      component: vMore
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    }
  ]
})
