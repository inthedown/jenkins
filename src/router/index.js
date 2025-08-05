import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // hash 模式用 'hash'
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About }
  ]
})
