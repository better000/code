import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/scss/style.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem, Lazyload, Tab, Tabs, Button, Cell, CellGroup, Image as VanImage, Popup, NoticeBar, Form, Field, Picker, Uploader, Pagination, Tag, Icon } from 'vant'

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
Vue.use(NoticeBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Picker)
Vue.use(Uploader)
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Icon)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3333/web/api'
}) */

const http = axios.create({
  baseURL: 'http://localhost:3333/web/api'
})

http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  return Promise.reject(err)
})

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
