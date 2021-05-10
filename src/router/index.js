import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/Search.vue'


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '*',
      name: 'Search',
      component: Search
    }
  ]
})
