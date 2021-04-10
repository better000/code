import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'
import Service from '../views/Service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article,
    props: true
  },
  {
    path: '/hero/:id',
    name: 'hero',
    component: Hero,
    props: true
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  }
]

const router = new VueRouter({
  routes
})

export default router
