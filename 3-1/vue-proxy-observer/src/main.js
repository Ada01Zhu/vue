import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let vm = new Vue({
  // 将 router 路由对象挂载到 vue 实例上
  router,
  render: h => h(App)
}).$mount('#app')

console.log(vm);
