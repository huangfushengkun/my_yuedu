import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/css/base.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
