import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
//引入axios文件
import axios from 'axios'
//设置请求默认地址,  坑啊！！！！！！
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
// 将axios设置为vue原型对象的属性
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
