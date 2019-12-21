import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错

import axios from 'axios'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
//引入encryptjs
import { JSEncrypt } from 'jsencrypt'
//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引用elementui
Vue.use(ElementUI);

/*使用VueResource插件*/
// Vue.use(VueResource)

// var encrypt=require('encryptjs');
Vue.config.productionTip = false
//全局注册axios
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#app',
//   router,  // 注入到根实例中
//   render: h => h(App)
// })
