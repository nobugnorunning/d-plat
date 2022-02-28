import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";

import 'normalize.css/normalize.css'
import './assets/scss/index.scss'

// 导入权限验证模块
import '@/router/access'

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
