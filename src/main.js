// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/fonts/iconfont.css'
import axios from 'axios'
// 引入axios
import MintUI from 'mint-ui'
// 引入mint-ui组件
// 引入mintui css样式
import 'mint-ui/lib/style.css'
Vue.prototype.axios = axios
// 把axios绑定在vue的原型上
Vue.use(MintUI)
Vue.config.productionTip = false
// 定义总线
const Bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    Bus
  },
  components: { App },
  template: '<App/>'
})
