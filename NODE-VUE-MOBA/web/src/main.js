import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import { Swipe, SwipeItem, Lazyload, Tab, Tabs, Cell, CellGroup, Button, Image as VanImage } from 'vant'

Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(VanImage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
