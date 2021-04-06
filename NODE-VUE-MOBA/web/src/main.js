import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/scss/style.scss'
import { Swipe, SwipeItem, Lazyload, Tab, Tabs, Button, Cell, CellGroup, Image as VanImage, Popup } from 'vant'

Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Button)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Popup)

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3333/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
