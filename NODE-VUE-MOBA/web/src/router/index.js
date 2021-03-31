import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
